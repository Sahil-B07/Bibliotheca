import React from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {

    const showToast = (e)=>{
    e.preventDefault()
    toast.success("Login Successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });}
  return (
    <>
    <button onClick={showToast} className='p-2 bg-black text-white font-semibold text-lg m-3 rounded-md'>Click</button>
    </>
  )
}

export default Toast