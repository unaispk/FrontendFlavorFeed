import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/flavor-feed.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Searchbar from "../Searchbar";
import './Navbar.css'

import ExploreAll from '../../components/ExploreAll/ExploreAll';


const Navbar = () => {

  const UserId = sessionStorage.getItem('userId');
  console.log("........",UserId);

  const [open, setOpen] = useState(false);

  const role = sessionStorage.getItem('role');

  return (
    <>
      {role === "admin" ?
        // for admin
        <nav className="bg-white sticky top-0 z-40">
          <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to={'/'}><img src={Logo} alt="logo" className="md:cursor-pointer h-10" /></Link>
              <Searchbar />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
              <li><Link to="/" className="py-7 px-3 inline-block hover:text-primary">Home</Link></li>
              <NavLinks />
            </ul>
            <div className="md:block hidden"><Button /></div>
            {/* Mobile nav */}
            <ul
              className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"} `}>

              <li>
                <Link to="/" className="py-7 px-3 inline-block hover:text-primary">Home</Link>
              </li>

              <NavLinks />

              <div className="py-5">
                <Button />
              </div>

            </ul>
          </div>
        </nav> :

        //  for user 
        <nav className="bg-white sticky top-0 z-40">
          <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to={'/'}><img src={Logo} alt="logo" className="md:cursor-pointer h-9" /></Link>
              <Searchbar />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
              <li><Link to="/" className="py-7 px-3 inline-block hover:text-primary">Home</Link></li>

              <NavLinks />

              {
                UserId !== null ?
                <>
                
                
                <li><Link to="/addrecipe" className="py-7 px-3 inline-block hover:text-primary">ADD A RECIPE</Link></li>
                <li><Link to="/user/:UserID" className="py-7 px-3 inline-block hover:text-primary">Profile</Link></li>

                </>
                :
                <li> {()=>{window.location.reload()}} <Link to="/alertpage" className="py-7 px-3 inline-block hover:text-primary">ADD A RECIPE</Link></li>
              }

              {/* {
                UserId !== null ?
                <li><Link to="/user/:UserID" className="py-7 px-3 inline-block hover:text-primary">Profile</Link></li>
                :
                ''
              } */}
              

            </ul>
            
            <div className="md:block hidden"><Button /></div>

            {/* Mobile nav */}
            <ul
              className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"} `} >

              <li> <Link to="/" className="py-7 px-3 inline-block hover:text-primary">Home</Link></li>

              <NavLinks />


              <div className="py-5">
                <Button />
              </div>


            </ul>
          </div>
        </nav>
      }


    </>

  );
};

export default Navbar;
