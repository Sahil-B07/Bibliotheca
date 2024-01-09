"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Radio from "../../components/Models/Radio";
import { PiPlay } from "react-icons/pi";
import { featuresContent, featuresHead, radio } from "@/Constants/animation";

const AudiobookSection = () => {
  const [radioOnOff, setradioOnOff] = useState(false);
  const handleClick = () => {
    setradioOnOff(!radioOnOff);
  };

  return (
    <section className="bg-black h-full flex" id="audio">
      <motion.div 
      initial={"hidden"} whileInView={"visible"} viewport={{once:true}}
      className="grid grid-cols-3 w-full justify-items-center md:grid md:grid-cols-10 p-6 md:p-0 relative z-10 md:m-0 my-10">
        <motion.div
          className="col-span-3 self-center mt-[10rem] md:mt-0 md:col-span-3 md:col-start-2 md:justify-center md:items-center md:self-center md:relative absolute"
          variants={radio}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Model */}
          <Radio radioOnOff={radioOnOff} />
        </motion.div>
        
        <div className="flex-col col-span-3 md:col-span-4 md:col-start-6 md:mt-24 relative">
          <motion.h1 
          variants={featuresHead}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-[#dc2374] font-semibold text-xl md:text-3xl lg:whitespace-nowrap">
            A New Chapter in Storytelling
          </motion.h1>
          <motion.p 
          variants={featuresContent}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="font-semibold text-white text-base md:text-lg mt-5">
            Immerse in Soundscaped Stories
          </motion.p>
          <motion.p 
          variants={featuresContent}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="font-light text-gray-400 text-sm md:text-lg mt-3">
            Elevate your reading adventure with our immersive soundscapes.
            Explore stories that come to life through captivating music and
            sound effects, making every word an unforgettable experience. Dive
            into a new dimension of storytelling, where imagination knows no
            bounds.
          </motion.p>
        


        {/* play button */}
        <motion.div 
        variants={featuresContent}
        transition={{ duration: 1.5, delay: 2.3 }}
        className="mt-[25rem] mb-[2rem] md:mt-[15rem] md:mb-[4rem] col-span-1 col-start-3 flex justify-center relative">
          <button
            className={`rounded radio-btn ${
              !radioOnOff ? "animate-bounce" : "animate-pulse"
            }`}
            onClick={handleClick}
          >
            <PiPlay
              className={`scale-[1.5] md:scale-[2] hover:fill-pink-600 ${
                !radioOnOff ? "fill-pink-600" : "fill-pink-500"
              }`}
            />
          </button>
          <p className={`text-white font-semibold text-sm ml-4 ${
              !radioOnOff ? null : "animate-pulse"
            }`}>  
          Play the Symphony of Stories
          </p>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
};

export default AudiobookSection;
