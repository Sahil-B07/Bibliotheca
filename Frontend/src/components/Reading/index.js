import { forwardRef, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./read.css";
import { Button } from "@radix-ui/themes";

const Page = forwardRef((props, ref) => {

  const chapterList = []
  for (let i = 0; i < props.chapters.length; i++) {
    const element = props.chapters[i];
    const chapter = (
      <div className="page px-6 py-2" ref={ref}>
        <div className="page-content">
          <h2 className="page-header truncate">{props.header.book_title}</h2>
          {/* <div className="page-text">{props.header.book_authors}</div> */}
          <div className="page-text" dangerouslySetInnerHTML={{ __html: element[0].outerHTML }}></div>
          <div className="page-footer">{props.footer}</div>
        </div>
      </div>
    )
    chapterList.push(chapter)
  }
  
  return chapterList
});
const IndexPage = forwardRef((props, ref) => {
  const tablesList = [];
  for (let index = 0; index < props.tables.length; index++) {
    const table = (
      <div className="page px-6 py-2" key={index} ref={ref}>
        <div className="page-content">
          <h2 className="page-header">{props.header}</h2>
          <div className="page-text truncate">{props.tables[index]}</div>
          <div className="page-footer"></div>
        </div>
      </div>
    );
    tablesList.push(table);
  }
  return tablesList;
});

const Reading = ({ book, tables, chapters }) => {
  const ref = useRef();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  

  return (
    <div>
      <div className="relative flex justify-center px-4">
        <HTMLFlipBook
          onFlip={(e) => {
            setCurrentPage(ref.current?.pageFlip().getCurrentPageIndex());
          }}
          onInit={(e) => {
            setTotalPages(ref.current?.pageFlip().getPageCount());
            setCurrentPage(ref.current?.pageFlip().getCurrentPageIndex());
          }}
          ref={ref}
          maxShadowOpacity={0.5}
          width={400}
          height={500}
          className="bg-[#AD7F57] shadow-lg"
        >
          {/* Cover Page */}
          <div className="page" ref={ref}>
            <div className="page-image">
              <img
                src={book.book_cover_url.primary}
                alt={book.book_title}
                className="object-cover"
              />
            </div>
          </div>
          {/* Book Title */}
          <div className="page p-5" ref={ref}>
            <div className="grid h-full grid-rows-5 items-center border border-[hsl(35_20_70)] p-2 text-center">
              <div className="row-span-3 text-xl font-bold">
                {book.book_title}
              </div>
              <div className="text-base">{book.book_authors}</div>
            </div>
          </div>
          {/* Index Page */}
          <IndexPage tables={tables} header={'Index'} footer={""} />
          
          <Page chapters={chapters} header={book} footer={1} />
          
          {/* The End */}
          <div className="page p-5" ref={ref}>
            <div className="grid h-full grid-rows-5 items-center border border-[hsl(35_20_70)] p-2 text-center">
              <div className="row-span-3 text-xl font-bold">The End</div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
      <div className="mt-3 flex w-full max-w-full justify-center space-x-3">
        <Button
          onClick={() => {
            ref.current.pageFlip().flipPrev();
          }}
          color="brown"
          className="btn-prev"
        >
          Previous page
        </Button>
        <span className="text-[#AD7F57]">
          {" "}
          {currentPage} / {totalPages}{" "}
        </span>
        <Button
          onClick={() => {
            ref.current.pageFlip().flipNext();
          }}
          color="brown"
          className="btn-next"
        >
          Next page
        </Button>
      </div>
    </div>
  );
};

export default Reading;
