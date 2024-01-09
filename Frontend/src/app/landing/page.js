"use client";
import { Yeseva_One } from "next/font/google";
import AudiobookSection from "./AudiobookSection";
import Features from "./Features";
import Hero from "./Hero";

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <>
        <Hero myFont={{ yeseva }}/>
        <Features/>
        <AudiobookSection/>
    </>
  )
}

