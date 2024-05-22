import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Button = () => {
  const navigate = useNavigate();

  const role = sessionStorage.getItem('role');
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfull")

    setTimeout(()=>{
      navigate('/login');

    },5000)

    // navigate('/login');
  }
  
  return (
    <>
        <Toaster />


{
    (role == 'admin' || role == 'user') ?
      
    <>
      <button onClick={logout} className="bg-primary text-white  px-6 py-2 rounded-full">
        Log out
      </button>
      </>
      :
      <Link to={'/login'}><button className="bg-primary text-white  px-6 py-2 rounded-full">
        Get Started
      </button></Link>
      }
      </>
      
  );
};

export default Button;
