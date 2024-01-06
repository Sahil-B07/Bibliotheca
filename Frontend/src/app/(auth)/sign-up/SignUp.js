"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import AuthFeedback from "@/Utils/AuthFeedback";
import { useRouter } from "next/navigation";
import Datepicker from "react-tailwindcss-datepicker";
import PulseDot from "@/components/Spinner/PulseDot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [dob, setDob] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [date_of_birth, setDate_of_birth] = useState(undefined);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "first-name") {
      setFirst_name(e.target.value);
    } else if (e.target.name == "last-name") {
      setlast_name(e.target.value);
    } else if (e.target.name == "city") {
      setCity(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone_number(e.target.value);
    }
  };


  const handleCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleDate = (newValue) => {
    setDob(newValue);
    setDate_of_birth(newValue.startDate)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payloadData = {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      date_of_birth,
      city,
      country,
    };
    const response = await AuthFeedback(payloadData, "register");

    if (response.status >= 200 & response.status < 400) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else if (response.status >= 400) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900 sm:items-center">
      <ToastContainer />
      <div className="m-0 flex w-full justify-center bg-white shadow sm:m-5 sm:h-fit sm:w-fit sm:rounded-lg 2xl:w-[85vw]">
        <div className="p-6 sm:p-12 md:w-1/2 xl:w-6/12">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="ink-logo"
              quality={100}
              width={1}
              height={1}
              sizes="100vw"
              src="/png/logo-green.png"
              className="h-[15vh] w-fit"
            />
            <p className="mt-2 font-Great_Vibes text-4xl font-bold text-black">
              Inkwell Odessey
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-5 w-full flex-1">
              <div className="flex flex-col items-center">
                <button className="focus:shadow-outline flex w-full max-w-sm items-center justify-center rounded-lg bg-green-100 py-2 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                  <div className="rounded-full bg-white p-2">
                    <FcGoogle className="scale-[1.5]" />
                  </div>
                  <span className="ml-2">Sign Up with Google</span>
                </button>
              </div>

              <div className="my-10 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or sign Up with Inkwell E-mail
                </div>
              </div>

              <form autoComplete="off">
                <div className="space-y-12 pb-5">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          required
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={first_name}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          required
                          type="text"
                          name="last-name"
                          id="last-name"
                          value={last_name}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          required
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          autoComplete="off"
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Passowrd
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          required
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          autoComplete="off"
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={handleCountry}
                          id="country"
                          name="country"
                          value={country}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        >
                          <option>India</option>
                          <option>United States</option>
                          <option>Canada</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-start-0 sm:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="city"
                          id="city"
                          value={city}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="sm:col-start-0 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          type="tel"
                          name="phone"
                          id="phone"
                          pattern="[0-9]*"
                          placeholder="12345678901"
                          value={phone_number}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="sm:col-start-0 sm:col-span-3">
                      <label
                        htmlFor="DOB"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Date of birth
                      </label>

                      <div className="relative max-w-sm mt-2">
                        <Datepicker
                          onChange={handleDate}
                          inputName="dob"
                          useRange={false}
                          asSingle={true}
                          value={dob}
                          inputClassName="w-full rounded-lg border border-gray-200 bg-gray-100 px-2 py-2 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                          primaryColor="green"
                          displayFormat={"DD-MM-YYYY"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-green-400 py-2 font-semibold tracking-wide text-black transition-all duration-300 ease-in-out hover:bg-green-500 focus:outline-none"
                  >
                    {!loading ? (<> <PiUserCirclePlusLight className="scale-[1.5]" />
                    <span className="ml-2">Sign Up</span></>) : <div className="h-6"> <PulseDot/> </div>}
                  </button>
                  <p className="mt-6 text-center text-xs text-zinc-600">
                    Already have an account
                    <Link className="text-blue-500" href={"/login"}>
                      {" "}
                      Sign-In
                    </Link>
                  </p>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    I agree to abide by Inkwell Odessey's &nbsp;
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Terms of Service
                    </a>
                    &nbsp; and its &nbsp;
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden flex-1 justify-center bg-green-100 md:flex">
          <div className="w-[40vw] bg-contain bg-center bg-no-repeat">
            <Image
              priority
              alt="login-img"
              src={"/Images/sign-up.svg"}
              width={1}
              height={1}
              className="h-full w-fit object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
