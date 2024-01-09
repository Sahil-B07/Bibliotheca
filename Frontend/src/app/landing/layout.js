import Navbar from "@/components/Navbar";
import { Josefin_Sans } from "next/font/google";

const myFont = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});
export default function Layout({ children }) {
  return (
    <div className={myFont.className}>
      <Navbar />
      {children}
    </div>
  );
}
