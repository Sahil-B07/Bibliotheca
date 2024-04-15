"use client";
import Image from "next/image";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthFeedback from "@/Utils/AuthFeedback";
import PulseDot from "@/components/Spinner/PulseDot";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const payloadData = { email, password };
    const response = await AuthFeedback(payloadData, 'login')

    if (response.status == 200){
      setTimeout(() => {
        router.push("/biblio/survey");
      }, 2000);
    }
    else{
      setTimeout(() => {
        setLoading(false)
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
              src="/png/logo-blue.png"
              className="h-[15vh] w-fit"
            />
            <p className="mt-2 font-Great_Vibes text-4xl font-bold text-black">
              Inkwell Odessey
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-5 w-full flex-1">
              <div className="flex flex-col items-center">
                <button className="focus:shadow-outline flex w-full max-w-sm items-center justify-center rounded-lg bg-blue-200 py-2 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                  <div className="rounded-full bg-white p-2">
                    <FcGoogle className="scale-[1.5]" />
                  </div>
                  <span className="ml-2">Sign In with Google</span>
                </button>
              </div>

              <div className="my-10 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or sign In with Inkwell E-mail
                </div>
              </div>

              <form>
                <div className="mx-auto max-w-xs lg:max-w-sm">
                  <input
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                  />
                  <input
                    onChange={handleChange}
                    autoComplete="on"
                    className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`${loading?'cursor-not-allowed':null} focus:shadow-outline mt-5 flex w-full max-w-sm items-center justify-center rounded-lg bg-blue-400 py-2 font-bold text-black shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow focus:shadow-sm focus:outline-none`}
                  >
                    {!loading ? (<><PiUserCircleLight className="scale-[1.5]" />
                    <span className="ml-2">Sign In</span></>):(<div className="h-6"> <PulseDot/> </div>)}
                  </button>

                  <p className="mt-6 text-center text-xs text-zinc-600">
                    Don't have an account
                    <Link className="text-blue-500" href={"/sign-up"}>
                      {" "}
                      Sign-Up
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
        <div className="hidden flex-1 justify-center rounded-r-lg bg-blue-300 md:flex">
          <div className="w-[40vw]">
            <Image
              priority
              alt="login-img"
              src={"/Images/login.svg"}
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

export default Login;

{
  /* <a
  href="#"
  class="group relative overflow-hidden rounded bg-green-500 px-5 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-green-400 hover:ring-offset-2"
>
  <span class="ease absolute right-0 -mt-3 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
  <span class="relative">Button Text</span>
</a>; */
}
