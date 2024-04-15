"use client";
import SearchBox from "@/components/SearchBox/SearchBox";
import GetBooks from "./GetBooks";
import { useEffect, useState } from "react";
import DropDown from "@/components/DropDown/DropDown";
import Recommendation from "@/Utils/Recommendation";

const BooksGallery = () => {
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);
  const [title, setTitle] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem === "genre") {
      setGenre(answers);
    } else if (selectedItem === "author") {
      setAuthor(answers);
    } else if (selectedItem === "book") {
      setTitle(answers);
    }
  }, [answers]);

  return (
    <div className="h-full w-full bg-[#e3f6f5]">
      <div className="custom-shape-divider-bottom z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <section>
        <h1 className="ml-20 text-5xl font-bold text-[#1d315b]">For You</h1>
        <div className="grid-row-2 relative grid h-full w-full justify-center px-16">
          <Recommendation/>
        </div>
      </section>
      <section>
        <h1 className="ml-20 text-5xl font-bold text-[#1d315b]">Trending</h1>
        <div className="relative ml-24 mt-5 flex items-center gap-5">
          <div>
            <DropDown
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div>
            <SearchBox
              filter={true}
              topic={selectedItem}
              answers={answers}
              setAnswers={setAnswers}
              placeholder={"Type..."}
            />
          </div>
        </div>
        <div className="grid-row-2 relative grid h-full w-full justify-center px-16">
          <GetBooks
            book_genres={genre}
            book_authors={author}
            book_title={title}
          />
        </div>
      </section>
    </div>
  );
};

export default BooksGallery;
