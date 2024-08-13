
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const AlertPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='flex mt-20 h-full  items-center justify-center' >
        <div role="alert"
          className=" mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-8 lg:p-10"
        >
          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <p className="font-medium sm:text-xl text-emerald-700">Login Required</p>
          </div>

          <p className="mt-4 text-gray-600">
            To access this page, please log in to your account. If you don't have an account yet,
            you can sign up below.
          </p>

          <div className="mt-6 sm:flex sm:gap-4">

            <Button />

            <button onClick={() => { navigate(`https://backendflavorfeed.onrender.com/signup`) }} className="bg-green-500 text-white px-6 py-2 rounded-lg">Sign Up</button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>


    </>
  )
}

export default AlertPage
