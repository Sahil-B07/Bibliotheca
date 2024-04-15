import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const myFont = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Bibliotheca",
  description: "Uniting book enthusiasts, Our cutting-edge system tailors book suggestions and genres based on individual preferences, thanks to our meticulously trained and custom-developed recommendation system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Theme>
          <Navbar />
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
