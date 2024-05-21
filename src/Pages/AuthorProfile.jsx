import React, { useEffect,useState } from 'react';
// import MainRecipeCard from '../components/MainRecipeCard/MainRecipeCard';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
// import UsersRecipe from '../components/UsersRecipe';
// import AlertPage from './AlertPage';
// import Home from './Home/Home';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";




const AuthorProfile = () => {

    const [recipes, setRecipe] = useState([]);

    const navigate = useNavigate();

    const UserID = sessionStorage.getItem('userId');


    console.log(UserID);

    
    useEffect(() => {
        try {
            axios.get(`http://localhost:2001/recipe/view-user-recipes/${UserID}`)
                .then((res) => {
                    setRecipe(res.data.data)
                    console.log(res.data.data);
                    console.log("Response of profile :  ", res)
                })
        } catch (error) {
            console.error("Error in useEffect:", error);
        }
    }, [])


    return (
        <>


            <Navbar />

            <div className="flex flex-col  justify-center items-center h-3/4 p-4 md:p-8">
                <div className="text-4xl md:text-5xl font-bold text-center text-[#000]  md:mb-4   font-[Poppins]  ">
                    <h1> All recipes<span className='text-yellow-400  text-4xl md:text-5xl font-bold text-center font-[Poppins]'>Added by You</span></h1>
                </div>
            </div>
            <div className="row mx-4 mb-8 mt-4">
                <div className=" col ">
                    {/* <UsersRecipe /> */}

                    <div className="flex flex-wrap">
                {recipes.filter(recipe => recipe.status === 'approved').map((recipe, key) => (
                    <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                        <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                            <figure>
                                <img src={`${recipe.images[0]}`} alt="image" className='w-full h-60 object-cover' />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl font-semibold mb-2">{recipe.recipename}</h2>
                                <div className="card-actions flex justify-center">
                                <button className='bg-red-500 text-white px-4 py-2 rounded-full  hover:bg-red-600'><FontAwesomeIcon icon={faTrashCan} /> </button>
                                    <button onClick={() => { navigate(`/viewrecipe/${recipe._id}`) }} className="bg-primary text-white px-6 py-2 rounded-full">Get Recipe</button>
                                   <button className='bg-stone-500 text-white px-4 py-2 rounded-full  hover:bg-stone-600'><FontAwesomeIcon icon={faEdit} /> </button> 

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                </div>
            </div>





        </>
    );
};

export default AuthorProfile;
