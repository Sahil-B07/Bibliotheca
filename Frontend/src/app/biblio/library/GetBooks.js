"use client";

// fetch the book and display a list of books

import { GetData } from "@/Utils/GetData";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./loading";

const GetBooks = ({ book_genres, book_title, book_authors }) => {
  const [books, setBooks] = useState([]);
  const [hasNext, sethasNext] = useState(true);
  const [PageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetchMoreData();
  }, [hasNext]);

  useEffect(() => {
    setPageNo(1);
    setBooks([]);
    mainFun(1,[]);
    book_title=''
    book_authors=''
  }, [book_genres]);
  useEffect(() => {
    setPageNo(1);
    setBooks([]);
    mainFun(1,[]);
    book_authors=''
    book_genres=''
  }, [book_title]);
  useEffect(() => {
    setPageNo(1);
    setBooks([]);
    mainFun(1,[]);
    book_title=''
    book_genres=''
  }, [book_authors]);

  const mainFun = (PageNo, books) => {
    setTimeout(() => {
      GetData(PageNo, book_title, book_authors, book_genres)
        .then((response) => {
          setBooks(books.concat(response));
          return response;
        })
        .catch((error) => {
          sethasNext(false);
          console.error("Error:", error);
        });
    }, 1000);
  };

  const fetchMoreData = () => {
    setPageNo(PageNo + 1);
    mainFun(PageNo + 1, books);
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
        <div className="sm-cols-1 relative grid w-full gap-8 p-6 md:my-10 md:grid md:grid-cols-5 md:p-0">
          {books.map((book) => {
            return <Card key={book.book_id} book={book} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GetBooks;
