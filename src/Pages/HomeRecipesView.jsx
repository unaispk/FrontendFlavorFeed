import React, { useEffect, useState } from 'react';
import { FiClock, FiHeart } from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { useParams } from 'react-router';
import { Carousel } from 'flowbite-react';
import './CustomCarousel.css'
import { featuredRecipe, popularRecipe } from '../RecipeDatas';

const HomeRecipesView = () => {

    const { category, id } = useParams()
    console.log(category, id);
    const [recipe, setRecipe] = useState({});

    useEffect(() => {

        try {
            if (category == 'featuered') {
                const filteredData = featuredRecipe.filter((recipe) => {
                    return recipe.id == id
                })
                setRecipe(filteredData[0]);
            } else {
                const filteredData = popularRecipe.filter((recipe) => {
                    return recipe.id == id
                })
                setRecipe(filteredData[0]);
            }
        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <>
            <>
                <div className=" flex justify-center mt-4 mb-6">
                    <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">

                        <h1 className="text-4xl font-bold mb-4">{recipe.recipename}</h1>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

                            <Carousel className="custom-carousel">
                                {recipe.images ? (
                                    recipe.images.map((image, key) => (
                                        <img
                                            key={key}
                                            src={`${image}`}
                                            alt="Dish"
                                            className="w-full h-64 object-cover rounded-md mb-4"
                                        />
                                    ))
                                ) : (
                                    <img
                                        src="https://flowbite.com/docs/images/carousel/carousel-placeholder.svg"
                                        alt="Placeholder"
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                )}
                            </Carousel>
                        </div>

                        <div className="flex items-center space-x-4 m-4">
                            <div className="flex items-center">
                                <FiClock size={20} className="text-gray-500" />
                                <span className="ml-2">Prep Time: 15 mins</span>
                            </div>

                            <div className="flex items-center">
                                <FiHeart size={20} className="text-red-500" />
                                <span className="ml-2">Likes: 120</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                            <hr className='h-px my-8 bg-gray-400 border-0 dark:bg-gray-700' />


                            <ul className="list-disc pl-4">
                                {recipe.ingredients ? (
                                    recipe.ingredients.map((ingredient, index) => (
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


                            <article>
                                <p>{recipe.instructions}</p>
                            </article>

                        </div>

                    </div>
                </div>

                <Footer />
            </>

        </>
    )
}

export default HomeRecipesView
