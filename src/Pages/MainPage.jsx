import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainRecipeCard from '../components/MainRecipeCard/MainRecipeCard'
import { FiClock, FiUsers, FiHeart } from 'react-icons/fi';
import Footer from '../components/Footer/Footer';


function MainPage() {
  return (

    <>
      <div className=''>
        <div className="flex flex-col  justify-center items-center h-3/4 p-4 md:p-8">
          <div className="text-4xl md:text-5xl font-bold text-center text-[#000]  md:mb-4   font-[Poppins]  ">
            <h1> All <span className='text-yellow-400  text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Recipes</span></h1>
          </div>
        </div>
        {/* <div className='flex justify-center'> */}
          <div className="row justify-around mx-6 mb-8 mt-4 ">
            <div className=" col gap-8 ">
              <MainRecipeCard />             
            </div>
          </div>
        {/* </div> */}
        {/* ---------------------- */}

        <Footer />
      </div >
    </>
  )
}

export default MainPage

