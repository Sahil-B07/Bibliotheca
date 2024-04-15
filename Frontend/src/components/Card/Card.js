import { motion } from "framer-motion";
import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";
import { GoDependabot } from "react-icons/go";
import Book_3D from "../Book_3D";
import "../Book_3D/book.css";

const Card = ({ book }) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
      className="book-card grid md:grid-rows-4 h-[43vh] w-[15vw] rounded shadow-lg hover:shadow-xl hover:shadow-[#5d4a7c76] bg-[#fffffe]"
      key={book.book_id}>
      <div className="card-top md:row-span-3 row-span-3 mt-2">
        <Link href={{ pathname: `books/${book.book_id}`, query: { book: JSON.stringify(book) } }}>
        <Book_3D book={book}/>
        </Link>
      </div>
      <div className="card-bottom flex md:row-span-1">
        <div className="grid md:grid-rows-2 px-3 py-2 w-full">
          <Link href={`books/${book.book_id}`} className="text-[#272343] truncate text-sm">{book.book_title}</Link>
          <p className="text-gray-400 text-xs truncate">{book.book_genres}</p>
        <div className="flex justify-between">
          <Link href={`books/${book.book_id}`} className="text-black hover:animate-pulse text-xs flex items-center cursor-pointer">Read &nbsp;<FaBookOpenReader className="stroke-[#272343]"/> </Link>
          <div className="group">
            <span>
            <GoDependabot className="stroke-[#272343]"/>
            </span>
            <span
              className="absolute flex m-1 -translate-x-[6rem] -translate-y-[2.5rem] rounded-l-md rounded-t-md border border-black bg-white px-2
            text-sm text-black opacity-0 hover:hidden shadow-lg transition-all duration-[1s] ease-out group-hover:opacity-100"
            >
              Chat with AI
            </span>
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
