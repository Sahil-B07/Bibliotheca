"use client";
import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImQuill } from "react-icons/im";
import { headPara, headText } from "@/Constants/animation";
import DisSphere from "../../components/Models/DisSphere";
import Link from "next/link";
import Cursor from "@/Utils/Cursor";
import useIntersection from "@/Utils/useIntersection";

const Hero = ({myFont}) => {
  Cursor()
  const inViewport = useIntersection();
  return (
    <section className="relative flex h-screen bg-black -z-10" id="hero">
      <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-screen w-full divide-x divide-double divide-gray-100 opacity-10 md:grid md:grid-cols-6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        id="blob"
        className={`relative bg-gradient-to-r from-[#7825e5] to-[#f34bf3] z-0 ${
          inViewport ? "visible" : "hidden"
        }`}
      ></motion.div>

      <div className="relative z-10 grid w-full p-6 md:grid md:grid-cols-6 md:p-0">
        <div className="mr-auto mt-10 place-self-center md:col-span-2 md:col-start-2 md:flex md:flex-col">
          <motion.h1
            className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl xl:text-8xl"
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className={myFont.yeseva.className}
              variants={headText}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bibliotheca
            </motion.p>
          </motion.h1>
          <motion.p
            className="mb-6 max-w-2xl text-gray-400 md:mb-8 md:text-xl"
            variants={headPara}
            initial="hidden"
            animate="visible"
          >
            Where stories come alive with expressive narration. Your words, your
            emotions, connecting hearts globally.
          </motion.p>

          <motion.button
            className="self-start rounded bg-fuchsia-600 p-2 hover:bg-fuchsia-700 md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
          >
            <Link href={"/login"}>
              <span className="text-xl text-black !font-bold">
                Get Started &nbsp;
              </span>
              <span className="relative inline-flex h-4 w-4">
                <span className="absolute h-full w-full animate-ping rounded-full bg-neutral-100 opacity-75"></span>
                <motion.div
                  animate={{
                    x: [1, 2, -1, 1, -1, 2],
                    y: [1, -2, 1, 2, -1, 2],
                    rotate: [5, -5, 5, -5, 5, -5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  exit={{ x: -20 }}
                >
                  <ImQuill className="scale-125" />
                </motion.div>
              </span>
            </Link>
            &nbsp;
          </motion.button>
        </div>

        <Suspense fallback={null}>
          <div className="md:col-ends-5 flex items-center justify-center self-center md:col-span-3">
            <DisSphere />
            <Image
              className="hero-logo absolute w-[65vw] md:w-[25vw]"
              src={"/Images/hero-logo.svg"}
              width={100}
              height={100}
              alt="Hero Logo"
              priority={true}
            />
          </div>
        </Suspense>
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black from-5% to-[#00000001] to-95% md:h-20 md:opacity-60"></div>
      <div className="absolute bottom-0 left-0 z-0 w-full border-0 border-gray-100 opacity-10 md:border-b-2"></div>
    </section>
  );
};

export default Hero;
