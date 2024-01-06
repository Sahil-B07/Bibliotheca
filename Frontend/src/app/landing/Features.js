"use client"
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../../components/Models/Typewriter";
import { featuresContent, featuresHead, typeWriter } from "@/Constants/animation";
import { featureContent } from "@/Constants/constants";

const Features = () => {
  return (
    <>
      <section className="bg-black h-screen flex">
        <div className="grid w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10 sm-cols-1 md:my-10">
          <div className="flex-col md:col-span-2 md:col-start-2 mt-10">
            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true }}>
              <motion.div
                variants={featuresHead}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-[#0dedff] font-semibold md:text-3xl text-xl"
              >
                Features
              </motion.div>
              <motion.p
                variants={featuresHead}
                transition={{ duration: 1, delay: 1 }}
                className="font-light text-gray-400 md:text-base md:whitespace-nowrap text-sm mb-14"
              >
                Engage, Create, and Enjoy - Our Features Make It Possible
              </motion.p>
            

            { featureContent.map((content,index)=>(
              <motion.div key={index} className="md:text-base text-sm md:mt-5 mt-16"
              variants={featuresContent}
              transition={{ duration: 1, delay: 1.4 + index/10 }}
              >
                <p className="font-semibold text-white">{content.id}</p>
                <p className="text-gray-400">{content.desc}</p>
              </motion.div>
            )) }
            </motion.div>
          </div>

          {/*  Model */}
          <motion.div
          id="radio_model"
            className="flex justify-self-center self-center -z-10 md:z-0 md:col-span-3 md:justify-center md:items-center md:self-center md:relative absolute"
            variants={typeWriter}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Typewriter />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
