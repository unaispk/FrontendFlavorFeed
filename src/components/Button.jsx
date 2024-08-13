import React from "react";
// import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Button = () => {
  const navigate = useNavigate();

  let Role = sessionStorage.getItem('role');
  const logout = () => {
    sessionStorage.clear();
    // toast.success("Logout Successfull")
    setTimeout(()=>{
      navigate('https://backendflavorfeed.onrender.com/login');

    },2000)

    

    // navigate('/login');
  }
  
  return (
    <>
        {/* <Toaster /> */}


{
    (Role == 'admin' || Role == 'user') ?
      
    <>
      <button onClick={logout} className="bg-primary text-white  px-6 py-2 rounded-full">
        Log out
      </button>
      </>
      :
      <Link to={'https://backendflavorfeed.onrender.com/login'}><button className="bg-primary text-white  px-6 py-2 rounded-full">
        Get Started
      </button></Link>
      }
      </>
      
  );
};

export default Button;
