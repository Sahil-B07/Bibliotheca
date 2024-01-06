"use client"
import React, { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImQuill } from "react-icons/im";
import { headPara, headText } from "@/Constants/animation";
import DisSphere from "../../components/Models/DisSphere";
import Link from "next/link";
import PulseDot from "@/components/Spinner/PulseDot";


const Hero = () => {

  return (
    <section className="bg-black h-screen flex relative">
      <div className="hidden divide-x divide-double divide-gray-100 opacity-10 md:grid md:grid-cols-6 pointer-events-none absolute top-0 left-0 w-full h-screen z-0">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="grid w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10">
        <div className="mt-10 mr-auto md:col-span-2 md:col-start-2 md:flex md:flex-col place-self-center">
          <motion.h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-8xl text-white"
          initial="hidden"
          animate="visible"
          >
            <motion.p
              variants={headText}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Inkwell{" "}
            </motion.p>
            <motion.p
              variants={headText}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Odyssey
            </motion.p>
          </motion.h1>
          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-lg dark:text-gray-400"
            variants={headPara}
            initial="hidden"
            animate="visible"
          >
            Embark on an Inkwell Odyssey, where every page is a voyage, every
            word a compass, and every writer an explorer of worlds unknown.
          </motion.p>

          <motion.button
            className="bg-fuchsia-600 md:flex-row self-start p-2 hover:bg-fuchsia-700 rounded font-bold text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
          >
            <Link href={'/login'}>
            <span>Get Started &nbsp;</span>
            <span className="relative inline-flex h-4 w-4">
              <span className="animate-ping absolute h-full w-full rounded-full bg-neutral-100 opacity-75"></span>
              <motion.div 
              animate={{
                x: [1, 2, -1, 1, -1, 2],
                y: [1, -2, 1, 2, -1, 2],
                rotate: [5, -5, 5, -5, 5, -5]
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              exit={{x:-20}}
              ><ImQuill className="scale-125" /></motion.div>
            </span>
            </Link>
            &nbsp;
          </motion.button>
        </div>
        
        <Suspense fallback={null}>
        <div className="flex md:col-span-3 md:col-ends-5 justify-center items-center self-center">

          <DisSphere />
          <Image
          className="md:w-[25vw] w-[65vw] hero-logo absolute"
            src={"/Images/hero-logo.svg"}
            width={100}
            height={100}
            alt="Hero Logo"
            priority={true}
          />

        </div>
        </Suspense>
      </div>
      

      <div className="md:opacity-60 md:h-20 w-full z-10 bottom-0 left-0 bg-gradient-to-t from-black from-5% to-[#00000001] absolute to-95%"></div>
      <div className="border-0 md:border-b-2 border-gray-100 opacity-10 w-full z-0 bottom-0 left-0 absolute"></div>
    </section>
  );
};

export default Hero;
