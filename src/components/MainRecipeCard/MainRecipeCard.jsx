import React, { useEffect, useState } from 'react'
import './mainRecipeCard.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function MainRecipeCard() {

    const [recipes, setRecipes] = useState([]);

    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const navigate = useNavigate();
    console.log(recipes);


    useEffect(() => {
        axios.get('http://localhost:2001/recipe').then((res) => {
            setRecipes(res.data.data)
        })
    }, []) // depentancy array



    const role = sessionStorage.getItem('role');

    const approveRecipe = (id) => {
        console.log(id);
        axios.post(`http://localhost:2001/recipe/approve/${id}`).then((res) => {
            console.log(res);
        })
    }

    const rejectRecipe = (id) => {
        console.log(id);
        axios.post(`http://localhost:2001/recipe/reject/${id}`).then((res) => {
            console.log(res);
        })
    }

    return (
        <>
            {role === 'admin' ?
                //  Admin
                <div className="flex flex-wrap">
                    {recipes.map((recipe, key) => (
                        <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8">
                            <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                                <figure>
                                    <img src={`/images/uploads/${recipe.images[0]}`} alt="image" className='w-80 h-60 object-cover' />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{recipe.recipename}</h2>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => { navigate(`/viewrecipe/${recipe._id}`) }} className="bg-primary text-white px-6 py-2 rounded-full">Get Recipe</button>
                                    </div>

                                    <div className="card-actions justify-center">
                                        {recipe.status === "pending" ? <>

                                         
                                            <button onClick={() => { approveRecipe(recipe._id); setIsBtnClicked(true);}} className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2 rounded-full">accept</button>

                                            <button onClick={() => { rejectRecipe(recipe._id) }} className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-2 rounded-full">reject</button></>
                                            :
                                            <button onClick={() => { rejectRecipe(recipe._id) }} className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-2 rounded-full">reject</button>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> :
                // User
                <div className="flex flex-wrap">
                    {recipes.filter(recipe => recipe.status === 'approved').map((recipe, key) => (
                        <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                                <figure>
                                    <img src={`/images/uploads/${recipe.images[0]}`} alt="image" className='w-full h-60 object-cover' />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-xl font-semibold mb-2">{recipe.recipename}</h2>
                                    <div className="card-actions flex justify-center">
                                        <button onClick={() => { navigate(`/viewrecipe/${recipe._id}`) }} className="bg-primary text-white px-6 py-2 rounded-full">Get Recipe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default MainRecipeCard

