import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";


const Card = ({ book }) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
      className="card grid md:grid-rows-4 h-[40vh] w-[13vw] rounded shadow-lg hover:shadow-xl hover:shadow-[#5d4a7c76] bg-[#fffffe]"
    >
      <Link href={`books/${book.book_id}`}
      key={book.book_id}>
      <div 
      className="card-top md:row-span-3 pt-2 flex justify-center">
        <img
          alt={book.book_title}
          width={100}
          height={100}
          className="object-fill h-[29vh] w-[12vw] rounded drop-shadow-xl"
          src={book.book_cover_url.primary}
          onError={(e) => {
            e.target.src = book.book_cover_url.fallback;
          }}
          loading="lazy"
        />
      </div>
      <div className="card-bottom flex md:row-span-1">
        <div className="grid md:grid-rows-2 px-3 py-2">
          <h2 className="text-[#272343] truncate text-sm">{book.book_title}</h2>
          <h3 className="text-[#2d334a] hover:animate-pulse text-xs flex items-center cursor-pointer">Read &nbsp;<FaBookOpenReader className="stroke-[#272343]"/> </h3>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default Card;
