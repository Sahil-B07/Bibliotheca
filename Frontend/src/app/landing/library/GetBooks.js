"use client";

// fetch the book and display a list of books

import { GetData } from "@/Utils/GetData";
import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./loading";

const GetBooks = () => {
  const [books, setBooks] = useState([]);
  const [PageNo, setPageNo] = useState(1);
  const [hasNext, sethasNext] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const mainFun = () => {
    setLoading(true);
    setTimeout(() => {
      GetData(PageNo)
        .then((response) => {
          setBooks(books.concat(response));

          if (PageNo == 4) {
            sethasNext(false);
          }
          setLoading(false);
          return response;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 1000);
  };

  const fetchMoreData = () => {
    setPageNo(PageNo + 1);
    mainFun(PageNo + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={books.length}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={<Loading length={books} />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid w-full gap-8 md:grid md:grid-cols-5 p-6 md:p-0 relative z-10 sm-cols-1 md:my-10">
          {books.map((book) => {
            return <Card key={book.book_id} book={book} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GetBooks;
