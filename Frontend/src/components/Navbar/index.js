"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import DropDown from "../DropDown/DropDown";
import PulseDot from "../Spinner/PulseDot";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setactiveLink] = useState("home");
  const [authToken, setAuthToken] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setactiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    const token = Cookies.get("authToken");

    if (token) {
      setFirstName(jwt_decode(token).first_name);
      setLastName(jwt_decode(token).last_name);
      setAuthToken(token);
    }
    setLoading(false);
  }, [authToken]);

  const active = "text-neutral-200";

  return (
    <>
      <div className="fixed left-0 top-0 z-40 h-20 w-screen bg-gradient-to-b from-transparent from-5% to-transparent to-95% opacity-80"></div>
      <div className="fixed left-0 top-0 z-50 w-screen flex-col justify-center p-2 text-neutral-700 backdrop-blur-[2px] md:flex-row">
        <nav className="mt-2 flex items-center justify-center text-lg md:ml-auto md:mr-auto">
          <Link
            href={"/landing"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing" || activeLink === "/" ? active : null
            }`}
          >
            Home
          </Link>
          <Link
            href={"/landing/library"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing/library" ? active : null
            }`}
          >
            Library
          </Link>
          <Link
            href={"/landing/about"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing/about" ? active : null
            }`}
          >
            About
          </Link>

          {authToken ? (
            <div className="absolute right-[3rem] flex items-center">
              <span className="text-zinc-600">
                {" "}
                {firstName + " " + lastName}{" "}
              </span>{" "}
              &nbsp;
              <DropDown />
            </div>
          ) : !loading ? (
            <Link href={"/login"}>
              <span className="absolute right-[3rem] top-3 z-[60] rounded-md border border-white p-[.3rem] px-2 text-sm font-semibold text-white hover:border-fuchsia-600 hover:bg-fuchsia-600 hover:text-black">
                Get Started
              </span>
            </Link>
          ) : null}

          <div
            className={`${
              !loading ? "hidden" : "block"
            } absolute right-[3rem] flex items-center`}
          >
            <PulseDot />
          </div>
        </nav>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
