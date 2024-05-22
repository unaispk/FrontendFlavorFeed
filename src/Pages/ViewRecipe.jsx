import React, { useEffect, useState } from 'react';
import { FiClock, FiUsers, FiHeart } from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { useParams } from 'react-router';
import { Carousel } from 'flowbite-react';


const ViewRecipe = () => {

  const { recipeId } = useParams(); 
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    try {
      axios.get(`http://localhost:2001/recipe/viewsinglerecipe/${recipeId}`)
        .then((res) => {
          console.log("Response from server:", res);
          setRecipeDetails(res.data.data);
        })
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [recipeId]);

  const recipeName = recipeDetails.recipename;
  console.log(recipeName);

  console.log(recipeDetails);

  const images = recipeDetails && recipeDetails.images;
  const image = images && images[0];

  const ingredientList = recipeDetails && recipeDetails.ingredients;
  console.log(ingredientList);

  const instructions = recipeDetails && recipeDetails.instructions;

  console.log(instructions);

  
   
  return (
    <>
      <div className=" flex justify-center mt-4 mb-6">
        <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="User name"
            subheader="September 14, 2016"
          />
          <h1 className="text-4xl font-bold mb-4">{recipeName}</h1>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">


            <Carousel className="custom-carousel">
              {images ? (
                images.map((image, key) => (
                  <img
                    key={key}
                    src={`${image}`}
                    alt="Chocolate Cake"
                    className="w-full h-64 object-cover  rounded-md mb-4"
                  />
                ))
              ) : (
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-placeholder.svg" 
                  alt="Placeholder"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
              )}

            </Carousel >

    </div>


          {/* <img
            src={`/images/uploads/${image}`}
            alt="Chocolate Cake"
            className="w-full h-64 object-cover rounded-md mb-4"
          /> */}
          
          <div className="flex items-center space-x-4 m-4">
            <div className="flex items-center">
              <FiClock size={20} className="text-gray-500" />
              <span className="ml-2">Prep Time: 15 mins</span>
            </div>
            {/* <div className="flex items-center">
              <FiUsers size={20} className="text-gray-500" />
              <span className="ml-2">Serves: 8</span>
            </div> */}
            <div className="flex items-center">
              <FiHeart size={20} className="text-red-500" />
              <span className="ml-2">Likes: 120</span>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <hr className='h-px my-8 bg-gray-400 border-0 dark:bg-gray-700' />


            <ul className="list-disc pl-4">
              {ingredientList ? (
                ingredientList.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li>No ingredients available</li>
              )}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <hr className='h-px my-8 bg-gray-400 border-0 dark:bg-gray-700' />
            {/* <ol className="list-decimal pl-4">
              <li>Preheat the oven to 350°F (175°C).</li>
              <li>Grease and flour two 9-inch round cake pans.</li>
            </ol> */}
            
            <article>
              <p>{instructions}</p>
            </article>

          </div>

        </div>
      </div>

      <Footer />
    </>

  );
};

export default ViewRecipe;
