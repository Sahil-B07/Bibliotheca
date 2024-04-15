"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Chatbot from "react-chatbot-kit";
import { motion } from "framer-motion";

import { BiMicrophone } from "react-icons/bi";
import { GoDependabot } from "react-icons/go";
import { GiSpectacleLenses, GiSpectacles } from "react-icons/gi";

import ActionProvider from "@/components/ChatBot/ActionProvider";
import MessageParser from "@/components/ChatBot/MessageParser";
import config from "@/components/ChatBot/config";
import Reading from "@/components/Reading";

import IndexTable from "@/Utils/Reading/IndexTable";
import Chapters from "@/Utils/Reading/Chapters";
import { GetBookId } from "@/Utils/GetBookId";

import { bounceTransition, popUpBg, specsOff, specsOn } from "@/Constants/animation";

export default function Page({ params }) {
  const searchParams = useSearchParams();
  const book = JSON.parse(searchParams.get("book"));

  const [HtmlData, setHtmlData] = useState();
  const [tableData, setTableData] = useState(null);
  const [chapterData, setChapterData] = useState(null);
  const [showChat, setshowChat] = useState(false);
  const [isReadin, setIsReadin] = useState(false);
  const [isMic, setIsMic] = useState(false)

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  useEffect(() => {
    GetBookId(params.id)
      .then((response) => {
        setHtmlData(response);
        return response;
      })
      .catch((error) => {
        console.error("Fetching Error:", error);
      });
      localStorage.clear();
      localStorage.setItem('book_id', params.id);
  }, []);

  // For Index
  useEffect(() => {
    var span = document.createElement("span");
    span.innerHTML = HtmlData;
    let contentsHeading = [...span.querySelectorAll("h2")].find(
      (h2) => h2.innerHTML.trim() === "Contents",
    );
    let sibling = contentsHeading?.nextElementSibling.rows;

    if (sibling == undefined) {
      let contentsTable = span.querySelector("table")?.firstElementChild.rows;
      sibling = contentsTable;
    }

    setTableData(sibling);
  }, [HtmlData]);

  // For Chapters
  useEffect(() => {
    var span = document.createElement("span");
    span.innerHTML = HtmlData;
    let chapter = [...span.querySelectorAll(".chapter:not(:has(table))")];
    let childs = chapter;
    setChapterData(childs);
  }, [HtmlData]);

  return (
    <section
      className={`relative h-full min-h-screen pt-16 ${
        isReadin ? "bg-black" : "bg-white"
      }`}
    >
      {/* popUp bg */}
      <motion.div
      variants={popUpBg}
      animate={showChat ? "visible" : "hidden"}
      viewport={{ once: false }}
      className={`w-full z-20 inset-0 absolute ${showChat ? "bg-[#0000007b] " : 'hidden'} h-screen select-none`}
      />
      {/* x-----x */}

      <div className={`fixed z-20 flex w-full justify-center p-5`}>
        {/* chat Ai */}
        <motion.div
          variants={bounceTransition}
          animate={showChat ? "visible" : "hidden"}
          viewport={{ once: false }}
        >
          <div className={`chat relative ${showChat ? "visible" : "hidden"}`}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              // messageHistory={loadMessages()}
              saveMessages={saveMessages}
            />
          </div>
        </motion.div>
        {/* toggle chat */}
        <button
          onClick={() => {
            setshowChat(!showChat);
          }}
          className="bot-button fixed bottom-10 right-20 scale-[1.5] rounded-full bg-black p-2 shadow-sm shadow-[#AD7F57]"
        >
          <GoDependabot className={showChat?"fill-[#AD7F57]":"fill-white"} />
        </button>
      </div>

      <div className="z-10 relative mx-auto block h-full w-full max-w-full overflow-hidden pb-3 pt-16">
        {/* toggle read mode */}
        <div className={`absolute right-52 top-10 z-10 flex scale-[1.5] rounded-full px-2 py-1 ${isReadin?'shadow-inner shadow-[#AD7F57] bg-black': 'bg-white shadow shadow-[#AD7F57] drop-shadow-md'}`}>
        <button
          onClick={() => {
            setIsReadin(!isReadin);
          }}
          className="p-0.5"
        >
          {/* on */}
          <motion.div
            variants={specsOn}
            animate={isReadin ? "visible" : "hidden"}
            viewport={{ once: false }}
            className={`${isReadin ? "visible" : "hidden"}`}
          >
            <GiSpectacleLenses className="scale-[1.4] fill-[#AD7F57]" />
          </motion.div>
          {/* off */}
          <motion.div
            variants={specsOff}
            animate={!isReadin ? "visible" : "hidden"}
            viewport={{ once: false }}
            className={`${!isReadin ? "visible" : "hidden"}`}
          >
            <GiSpectacles className="scale-[1.4] fill-[#AD7F57]" />
          </motion.div>
          {/* speech */}
        </button>
          <motion.button onClick={()=>{setIsMic(!isMic)}}>
            <BiMicrophone className={`scale-[1.4] ml-2 p-0.5 fill-[#AD7F57] border-l border-dotted border-[#AD7F57] ${!isMic ? "fill-[#af6c32] animate-pulse" : null}`} />
          </motion.button>
        </div>
        {/* 3D book */}
        {tableData && chapterData && (
          <Reading
            book={book}
            tables={IndexTable(tableData, 18)}
            chapters={Chapters(chapterData)}
          />
        )}
      </div>
    </section>
  );
}
