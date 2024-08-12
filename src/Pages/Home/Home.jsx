import React from 'react'
import Button from "../../components/Button";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.css'
import ExploreAll from '../../components/ExploreAll/ExploreAll';
import { Link } from 'react-router-dom';
import HomeFeaturedRecipe from '../../components/CardsDishHome/HomeFeaturedRecipe';
import HomePopularRecipeCard from '../../components/CardsDishHome/HomePopularRecipeCard';

const Home = () => {

  const role = sessionStorage.getItem('role');

  return (
    <>
    <div>
      
      <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center bg-blend-color bg-[#00000057] ">
        
        <div className="flex flex-col justify-center items-center h-3/4 p-4 md:p-8">
          <div className="text-4xl md:text-5xl font-bold text-center text-white mb-8 md:mb-20">
            Flavor<span className="text-yellow-400 ">Share</span>: Your Culinary Canvas for <span className="text-yellow-400 ">Sharing</span>, Savoring, and Creating Delicious <span className="text-yellow-400 ">Memories</span>!
          </div>
          {
             role == 'user' || role == 'admin' ? '' :
             <div className="text-3xl">
               <Button />
             </div> 
          }
          
        </div>
      </section >

      <div className="">
        <div className="flex flex-col justify-center items-center h-3/4 p-4 md:p-8">
          <div className="  text-4xl md:text-5xl font-bold text-center font-[Poppins]  ">
            <h1>Featured <span className='text-yellow-400  text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Recipes</span></h1>
          </div>
        </div>

        <div className="flex justify-around mx-4 mb-8 mt-4 ">
          <div className="flex flex-wrap ">
          <HomeFeaturedRecipe/>
          </div>

        </div>
      </div>

      {/* ----------------------  */}
      <div className="bg-[#d4dbff2e]">
        <div className="flex flex-col justify-center items-center h-3/4 p-4 md:p-8">
          <div className="  text-4xl md:text-5xl font-bold text-center font-[Poppins]  ">
            <h1>Popular <span className='text-yellow-400  text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Recipes</span></h1>
          </div>
        </div>

        <div className="flex justify-around mx-4 mb-8 mt-4 ">
          <div className="flex flex-wrap   ">
          <HomePopularRecipeCard />
          </div>
        </div>
        <div className="text-center mb-4">
           <Link to={'/main'}><ExploreAll /></Link>
        </div>

        
      </div>

      <section className="h-screen bg-Cook bg-cover font-[Poppins] md:bg-top bg-center bg-blend-color bg-[#0000005c] border-b">
        
        {/* <div className="flex flex-col   h-3/4 p-4 md:p-16 md:pt-20">
          <div className="text-white  text-4xl md:text-5xl font-bold text-center font-[Poppins]">
            <h1>Get Daily<span className='text-yellow-400 text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Updates</span></h1>
          </div> */}

         {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:pt-20 p-4">
  <div className="bg-base-200 p-4 text-gray-200 text-base md:text-lg font-[Poppins]">
    <p>Welcome to Flavour Feed! Discover and share delicious recipes by creating an account on our user-friendly platform. Explore a wide variety of recipes, complete with images, ingredients, and detailed descriptions. Simply click on a recipe card to view all the mouth-watering details. Use our convenient search field to find exactly what you're craving in no time. Flavour Feed is designed to be mobile-friendly, ensuring you have easy access to your favorite recipes whether you're at home or on the go. Join our community today and start your culinary journey with Flavour Feed!</p>
  </div>

  <div className="flex justify-center items-center h-full">
    {role !== 'user' && role !== 'admin' && (
      <div className="text-2xl md:text-3xl">
        <Button />
      </div>
    )}
  </div>

 
</div> */}

<div className="flex flex-col h-3/4 p-4 sm:p-8 md:p-12 md:pt-18 lg:pt-24">
  <div className="text-white text-3xl sm:text-4xl md:text-4xl font-bold text-center font-[Poppins]">
    <h1>Get Daily <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-bold">Updates</span></h1>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:justify-center md:grid-cols-2 md:gap-0 md:pt-4  p-4">
    <div className="bg-base-200 p-4 text-gray-200 text-md  md:justify-center sm:text-base md:text-auto font-[Poppins]">
      <p>Welcome to Flavour Feed! Discover and share delicious recipes by creating an account on our user-friendly platform. Explore a wide variety of recipes, complete with images, ingredients, and detailed descriptions. Simply click on a recipe card to view all the mouth-watering details. Use our convenient search field to find exactly what you're craving in no time. Flavour Feed is designed to be mobile-friendly, ensuring you have easy access to your favorite recipes whether you're at home or on the go. Join our community today and start your culinary journey with Flavour Feed!</p>
    </div>

    <div className="flex justify-center items-center h-full">
      {role !== 'user' && role !== 'admin' && (
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <Button />
        </div>
      )}
    </div>
  </div>
</div>



        {/* </div> */}

      </section >
      
      <Footer />
    </div >
    </>
  )
}

export default Home
