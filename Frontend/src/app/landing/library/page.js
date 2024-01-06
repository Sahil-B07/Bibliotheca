import React from "react";
import AllBooks from "./AllBooks";
import Carousel from "@/components/Carousel/Carousel";
import GetBooks from "./GetBooks";

const Library = () => {
  return (
    <>
      <section className="h-full w-full">
        <Carousel />
        <AllBooks children={<GetBooks />} />
      </section>
    </>
  );
};

export default Library;
