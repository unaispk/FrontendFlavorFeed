import React from 'react'
import Button from "../../components/Button";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.css'
import CardsDishHome from '../../components/CardsDishHome/CardsDishHome';
import ExploreAll from '../../components/ExploreAll/ExploreAll';
import { Link } from 'react-router-dom';
// import Nav from '../../components/Nav';

const Home = () => {

  const role = sessionStorage.getItem('role');

  return (
    <>
    <Navbar />
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
          <CardsDishHome image="/images/uploads/dish3.jpg" title="Dish 1" />
          <CardsDishHome image="/images/uploads/dish1.jpg" title="Dish 1" />
          <CardsDishHome image="/images/uploads/5057.jpg" title="Biriyani" />
          <CardsDishHome image="/images/uploads/dish2.jpg" title="Dish 1" />
          </div>

        </div>
      </div>

      {/* ---------------------- */}
      <div className="bg-[#d4dbff2e]">
        <div className="flex flex-col justify-center items-center h-3/4 p-4 md:p-8">
          <div className="  text-4xl md:text-5xl font-bold text-center font-[Poppins]  ">
            <h1>Popular <span className='text-yellow-400  text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Recipes</span></h1>
          </div>
        </div>

        <div className="flex justify-around mx-4 mb-8 mt-4 ">
          <div className="flex flex-wrap   ">
          <CardsDishHome image="/images/uploads/dish3.jpg" title="Dish 1" />
          <CardsDishHome image="/images/uploads/dish1.jpg" title="Dish 1" />
          <CardsDishHome image="/images/uploads/5057.jpg" title="Biriyani" />
          <CardsDishHome image="/images/uploads/dish2.jpg" title="Dish 1" />
          </div>
        </div>
        <div className="text-center mb-4">
           <Link to={'/main'}><ExploreAll /></Link>
        </div>

        
      </div>

      <section className="h-screen bg-Cook bg-cover font-[Poppins] md:bg-top bg-center bg-blend-color bg-[#0000005c] ">
        <div className="flex flex-col   h-3/4 p-4 md:p-16 md:pt-20">
          <div className="text-white  text-4xl md:text-5xl font-bold text-center font-[Poppins]">
            <h1>Get Daily<span className='text-yellow-400 text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Updates</span></h1>
          </div>

          <div className="grid grid-cols-2 gap-12 md:pt-20">
            <div className="bg-base-200 p-4 text-white md:text-lg  font-[Poppins]">
              <p>it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. </p>

                {
                  role == 'user' || role == 'admin' ? '' :
                    <div className="text-3xl">
                      <Button />
                    </div>
                }

            </div>
            <div className="bg-base-200 p-4 flex justify-center">
              <div className='w-80 shadow-xl'>
                <img src="src/assets/baking.jpg" alt="image" className='w-full h-full object-contain rounded-lg' />
              </div>
            </div>

          </div>
        </div>

      </section >
      
      <Footer />
    </div >
    </>
  )
}

export default Home
