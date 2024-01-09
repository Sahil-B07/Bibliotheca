"use client";
import { Josefin_Sans, Yeseva_One } from "next/font/google";
import AudiobookSection from "./AudiobookSection";
import Features from "./Features";
import Hero from "./Hero";

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
});
const josefin = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <>
        <Hero myFont={{  yeseva, josefin }}/>
        <Features/>
        <AudiobookSection/>
    </>
  )
}

