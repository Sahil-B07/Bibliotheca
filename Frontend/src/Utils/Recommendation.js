import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetData } from "@/Utils/GetData";
import Card from "@/components/Card/Card";
import Cookies from "js-cookie";
import Loading from "@/app/biblio/library/loading";

const Recommendation = () => {
  const [books, setBooks] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [userPreferences, setUserPreferences] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchUserPreferences();
  }, []);

  useEffect(() => {
    if (userPreferences) {
      mainFun(1, books, userPreferences[index]);
    }
  }, [userPreferences]);

  const fetchUserPreferences = async () => {
    // Fetch user preferences
    const res = await fetch("http://127.0.0.1:8000/auth/preferences/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserPreferences(data["genre"]);
      })
      .catch((error) => {
        console.error("Error fetching user preferences:", error);
      });
  };

  const mainFun = (pageNo, books, book_genres) => {
    setTimeout(() => {
      GetData(pageNo, "", "", book_genres)
        .then((response) => {
          setBooks(books.concat(response));
          return response;
        })
        .catch((error) => {
          setHasNext(false);
          console.error("Error fetching books:", error);
        });
    },1000);
  };

  useEffect(() => {
    fetchMoreData();
  }, [books]);

  const fetchMoreData = () => {
    if (userPreferences) {
      if (userPreferences[index + 1]) {
        setIndex(index + 1);
        const genre = userPreferences[index + 1];
        mainFun(1, books, genre);
      } 
      else{
        setHasNext(false)
      }
    }
  };

  return (
    <div id="moreRec">
      <InfiniteScroll
      scrollableTarget={"moreRec"}
        dataLength={books.length}
        next={fetchMoreData}
        hasMore={hasNext}
        loader={<Loading length={books} />}
      >
        <div className="sm-cols-1 relative grid w-full gap-8 p-6 md:my-10 md:grid md:grid-cols-5 md:p-0">
          {books.map((book) => (
            <Card key={`rec-${book.book_id}`} book={book} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Recommendation;
