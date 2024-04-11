import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const role = sessionStorage.getItem('role');
  const logout = () => {
    sessionStorage.clear();
  }
  return (
    (role == 'admin' || role == 'user') ?

      <Link to={'/login'}><button onClick={logout} className="bg-primary text-white  px-6 py-2 rounded-full">
        Log out
      </button></Link> 
      :
      <Link to={'/login'}><button className="bg-primary text-white  px-6 py-2 rounded-full">
        Get Started
      </button></Link>

  );
};

export default Button;
