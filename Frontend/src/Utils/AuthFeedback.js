import Cookies from "js-cookie";
import { toast } from "react-toastify";


const AuthFeedback = async (payloadData, action) => {
  const res = await fetch(`http://127.0.0.1:8000/auth/${action}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloadData),
  })

  const data = await res.json();

  if (res.status >= 200 & (res.status < 400)) {
    toast.success(`${action == 'login'? 'Login':'Registed'} Successfully!`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      delay: 1000,  
    });

    if(action=='login')
    {const token = decodeURIComponent(data.access).replace(/"/g, "");
    Cookies.set("authToken", token);}
  } else if (res.status >= 400) {
    toast.error("Invalid Credentials!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      delay: 700,
    });
  }
  return res;
};

export default AuthFeedback;
