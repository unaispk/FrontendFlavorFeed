import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/flavor-feed.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Searchbar from "../Searchbar";
import './Navbar.css'

// import ExploreAll from '../../components/ExploreAll/ExploreAll';

const NewNav = () => {

  const UserId = sessionStorage.getItem('userId');
  console.log("........", UserId);

  const [open, setOpen] = useState(false);

  const role = sessionStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // Disable body scroll when menu is open
    } else {
      document.body.style.overflow = ''; // Re-enable body scroll when menu is closed
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on component unmount
    };
  }, [open]);

  return (
    <>
      {role === "admin" ?
        // for admin
        <nav className="bg-stone-50 sticky top-0 z-40">
          <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to={'https://backendflavorfeed.onrender.com'}><img src={Logo} alt="logo" className="md:cursor-pointer h-10" /></Link>
              <Searchbar />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
              <li><Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link></li>
              {/* <NavLinks /> */}
            </ul>
            <div className="md:block hidden"><Button /></div>
            {/* Mobile nav */}
            <ul
              className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"} `}>

              <li>
                <Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link>
              </li>

              {/* <NavLinks /> */}


              <div className="py-5">
                <Button />
              </div>

            </ul>
          </div>
        </nav>  : 

        //  for user 
        role === "user" ? 
        <nav className="bg-white sticky top-0 z-40">
          <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to={'https://backendflavorfeed.onrender.com'}><img src={Logo} alt="logo" className="md:cursor-pointer h-9" /></Link>
              <Searchbar />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
              <li><Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link></li>
              <li><Link to="https://backendflavorfeed.onrender.com/main" className="py-7 px-3 inline-block hover:text-primary">RECIPES</Link></li>

              {/* <NavLinks /> */}

                <li><Link to="https://backendflavorfeed.onrender.com/addrecipe" className="py-7 px-3 inline-block hover:text-primary">ADD A RECIPE</Link></li>

                <li> <Link to="https://backendflavorfeed.onrender.com/user/:UserID" className="py-7 px-3 inline-block hover:text-primary">PROFILE</Link></li>
                 
            </ul>

            <div className="md:block hidden"><Button /></div>

            {/* Mobile nav */}
            <ul
              className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"} `} >

              <li> <Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link></li>
              <li><Link to="https://backendflavorfeed.onrender.com/main" className="py-7 px-3 inline-block hover:text-primary">RECIPES</Link></li>
              <li><Link to="https://backendflavorfeed.onrender.com/addrecipe" className="py-7 px-3 inline-block  hover:text-primary">ADD A RECIPE</Link></li>
              <li> <Link to="https://backendflavorfeed.onrender.com/user/:UserID" className="py-7 px-3 inline-block hover:text-primary">PROFILE</Link></li>

              {/* <NavLinks /> */}


              <div className="py-5">
                <Button />
              </div>


            </ul>
          </div>
        </nav> :
        //  visitor
        <nav className="bg-white sticky top-0 z-40">
          <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to={'https://backendflavorfeed.onrender.com'}><img src={Logo} alt="logo" className="md:cursor-pointer h-9" /></Link>
              <Searchbar />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
              <li><Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link></li>
              <li><Link to="https://backendflavorfeed.onrender.com/main" className="py-7 px-3 inline-block hover:text-primary">RECIPES</Link></li>

              {/* <NavLinks /> */}

                <li> {()=>{window.location.reload()}} <Link to="https://backendflavorfeed.onrender.com/alertpage" className="py-7 px-3 inline-block hover:text-primary">ADD A RECIPE</Link></li>
                {/* <li> {()=>{window.location.reload()}} <Link to="/signup" className="py-7 px-3 inline-block hover:text-primary">PROFILE</Link></li> */}

                <li  onClick={() => { navigate(`https://backendflavorfeed.onrender.com/signup`) }}  className="py-7 px-3 inline-block hover:text-primary cursor-pointer">PROFILE</li>

            </ul>

            <div className="md:block hidden"><Button /></div>

            {/* Mobile nav */}
            <ul
              className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"} `} >

              <li> <Link to="https://backendflavorfeed.onrender.com" className="py-7 px-3 inline-block hover:text-primary">HOME</Link></li>
              <li><Link to="https://backendflavorfeed.onrender.com/main" className="py-7 px-3 inline-block hover:text-primary">RECIPES</Link></li>
              <li> {()=>{window.location.reload()}} <Link to="https://backendflavorfeed.onrender.com/alertpage" className="py-7 px-3 inline-block hover:text-primary">ADD A RECIPE</Link></li>
              <li  onClick={() => { navigate(`https://backendflavorfeed.onrender.com/signup`) }}  className="py-7 px-3 inline-block hover:text-primary cursor-pointer">PROFILE</li>

              {/* <NavLinks /> */}


              <div className="py-5">
                <Button />
              </div>
              <span className="text-sm text-amber-400">! click on the menue and close the window</span>


            </ul>
          </div>
        </nav>
      }


    </>

  );
};

export default NewNav;
