"use client";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { quiz } from "@/Constants/constants";
import { useEffect, useState } from "react";
import PulseDot from "@/components/Spinner/PulseDot";
import { useRouter } from "next/navigation";
import SetPreferences from "@/Utils/SetPreferences";
import Cookies from "js-cookie";
import Loading from "./loading";
import SearchBox from "@/components/SearchBox/SearchBox";

const Survey = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndices, setSelectedAnswerIndices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(true);

  const { questions } = quiz;
  const { question, choices, topic } = questions[activeQuestion];
  const [answers, setAnswers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const loadPreferences = async () => {
      const authToken = Cookies.get("authToken");
      if (authToken) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_PREFERENCES}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
            },
          );

          if (response.ok) {
            const preferencesData = await response.json();
            const hasNullValue = Object.values(preferencesData).some(
              (value) => value === null,
            );

            if (hasNullValue) {
              for (const topic in preferencesData) {
                if (preferencesData[topic] == null) {
                  const index = questions.findIndex(
                    (question) => question.topic === topic,
                  );
                  setActiveQuestion(index);
                  setLoading(true);
                  break;
                }
              }
            } else {
              router.push("/biblio");
            }
          } else {
            console.error(
              "Error response:",
              response.status,
              response.statusText,
            );
          }
        } catch (error) {
          console.error("Error loading preferences:", error);
        }
      }
    };

    loadPreferences();
  }, []);

  const onClickNext = (e) => {
    setSelectedAnswerIndices([]);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
    }
    SetPreferences(topic, answers);
  };

  const handleFinish = () => {
    setLoadingButton(false);
    SetPreferences(
      topic,
      selectedAnswerIndices.map((index) => choices[index]),
    );
    setTimeout(() => {
      router.push("/biblio");
    }, 3000);
  };

  const onAnswerSelected = (index) => {
    setSelectedAnswerIndices((prevIndices) => {
      const indexExists = prevIndices.includes(index);

      if (indexExists) {
        answers.filter((i) => i !== choices[index]);
        return prevIndices.filter((i) => i !== index);
      } else {
        setAnswers([...answers, choices[index]]);
        return [...prevIndices, index];
      }
    });
  };

  useEffect(() => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.opacity = 1;
      setTimeout(() => {
        tooltip.style.opacity = null;
      }, 4000);
    }
  }, [loading]);

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <section className="relative flex h-screen items-center justify-center">
      {loading ? (
        <div className="mt-10 w-max max-w-lg rounded-md px-8 py-12 shadow-lg">
          {/* tooltip */}
          <div className="group relative flex justify-end">
            <span>
              <HiOutlineInformationCircle className="scale-[1.5]" />
            </span>
            <span
              id="tooltip"
              className="absolute m-1 -translate-y-[2.2rem] rounded-l-md rounded-t-md border border-black bg-white px-2
            text-base text-black opacity-0 shadow-lg transition-all duration-[1s] ease-out group-hover:opacity-100"
            >
              Select Multiple Options
            </span>
          </div>
          {/* questions */}
          <div>
            <span className="active-question-no text-3xl font-medium text-pink-700">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question text-base font-medium text-gray-500">
              /{addLeadingZero(questions.length)}
            </span>
            <h2 className="m-0 text-xl font-medium">{question}</h2>
          </div>
          <ul className="relative mt-5 max-w-xs space-y-2 text-lg">
            {choices.map((answer, index) => {
              if (answer == "") {
                return (
                  <SearchBox
                    setSelectedAnswerIndices={setSelectedAnswerIndices}
                    key={index}
                    selectedAnswerIndices={selectedAnswerIndices}
                    onClick={onAnswerSelected}
                    selectedIndex={index}
                    topic={topic}
                    answers={answers}
                    setAnswers={setAnswers}
                    placeholder={"Your Choice"}
                  />
                );
              } else {
                return (
                  <li
                    onClick={() => onAnswerSelected(index)}
                    key={index}
                    className={`${
                      selectedAnswerIndices.includes(index)
                        ? "border-pink-700 bg-pink-200"
                        : "border-pink-200"
                    } rounded-lg border p-3`}
                  >
                    {answer}
                  </li>
                );
              }
            })}
          </ul>
          <div className="float-right mt-3 text-lg">
            {activeQuestion === questions.length - 1 ? (
              <button
                onClick={handleFinish}
                className={`rounded-md bg-pink-500 px-5 py-1 shadow-xl ${
                  selectedAnswerIndices.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-default hover:bg-pink-600"
                }`}
                disabled={selectedAnswerIndices.length === 0}
              >
                {loadingButton ? (
                  <span>Finish</span>
                ) : (
                  <div className="">
                    <PulseDot />
                  </div>
                )}
              </button>
            ) : (
              <button
                className={`rounded-md bg-pink-500 px-5 py-1 shadow-xl ${
                  selectedAnswerIndices.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-default hover:bg-pink-600"
                }`}
                onClick={onClickNext}
                disabled={selectedAnswerIndices.length === 0}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Survey;
