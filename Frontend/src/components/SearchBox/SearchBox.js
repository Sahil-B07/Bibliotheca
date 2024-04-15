"use client";
import { SearchBy } from "@/Utils/SearchBy";
import { useEffect, useState } from "react";

const SearchBox = ({ topic, answers, setAnswers, placeholder, filter=false, setSelectedAnswerIndices, selectedAnswerIndices, selectedIndex }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [trigger, setTrigger] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setTrigger(true);

    if (topic == "genre") {
      setSearchTopic("Genres");
    } else if (topic == "author") {
      setSearchTopic("Authors");
    } else if (topic == "book") {
      setSearchTopic("Title");
    }

    SearchBy(searchTopic, inputValue)
      .then((filteredData) => {
        const uniqueResultsSet = new Set(filteredData);
        const uniqueResultsArray = Array.from(uniqueResultsSet);
        setResults(uniqueResultsArray);
      })
      .catch((error) => {
        console.error("Error searching data:", error);
      });
  };

  const handleClick = (result) => {
    if(filter){
      answers.pop()
    }
    setSelectedAnswerIndices?.([...selectedAnswerIndices,selectedIndex])
    setQuery(result);
    setTrigger(false);
    setAnswers([...answers, result]);
  };

  useEffect(() => {
    setQuery("");
    setTrigger(true);
    setAnswers([])
  }, [topic]);

  return (
    <div className="relative flex-row z-10">
      <div
        className={`w-full max-w-sm relative search rounded-md border border-pink-200 p-2 focus-within:border-pink-500 ${
          !trigger ? "border-pink-700 bg-pink-200" : 'bg-transparent'
        }`}
      >
        <input
          onChange={handleChange}
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
          className={`focus:outline-none w-full ${
            !trigger ? "border-pink-700 bg-pink-200" : 'bg-transparent'
          }`}
          autoComplete="off"
          value={query}
        />
      </div>
      <div className="relative">
      {query && trigger ? (
        <ul className="absolute w-full max-w-sm max-h-[10rem] search-result space-y-1 divide-y divide-pink-300 overflow-y-scroll rounded-md bg-white p-2 shadow-md">
          {results.map((result, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(result);
                }}
                key={index}
                className="hover:bg-pink-200 rounded-md px-1 py-2 truncate ease-in hover:cursor-pointer hover:whitespace-normal active:bg-pink-100"
              >
                {result}
              </li>
            );
          })}
        </ul>
      ) : null}
      </div>
    </div>
  );
};

export default SearchBox;
