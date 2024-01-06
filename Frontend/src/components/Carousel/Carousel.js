"use client";

import { GetData } from "@/Utils/GetData";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselSettings } from "@/Constants/carousel";
import Card from "../Card/Card";

const Carousel = () => {
  const [books, setBooks] = useState([]);
  const slider = useRef(null)

  useEffect(() => {
    GetData(1)
      .then((response) => {
        setBooks(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="z-0 w-full flex md:px-[7rem] md:pt-[10rem] bg-gradient-to-r from-[#fca311] to-[#fca311]">
        <div className="w-full h-full flex relative justify-center ">
          <div className="w-full h-full">
        <Slider arrows={false} ref={slider} {...carouselSettings}>
        {books.map((book) => {
          return (
            <Card key={book.book_id} book={book}/>
          );
        })}
        </Slider>
        </div>
        <button className="absolute place-self-center left-0" onClick={() => slider?.current?.slickPrev()}><IoMdArrowRoundBack/></button>
        <button className="absolute place-self-center right-0" onClick={() => slider?.current?.slickNext()}><IoMdArrowRoundForward/></button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
