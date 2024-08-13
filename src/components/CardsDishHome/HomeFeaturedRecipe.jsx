import React from 'react'
import { featuredRecipe } from '../../RecipeDatas'
import { useNavigate } from 'react-router'

const HomeFeaturedRecipe = ()  => {

    const navigate = useNavigate();

    const viewRecipe = (id,category) => {
        navigate(`https://backendflavorfeed.onrender.com/viewrecipe/${category}/${id}`)
    }

    return (
        <>   
        {featuredRecipe.map((recipe, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8 ">
                <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                    <figure><img src={recipe.images[0]} alt="Dish" className='w-80 h-60 object-fit' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe.recipename}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="bg-primary text-white  px-6 py-2 rounded-full" onClick={()=>{viewRecipe(recipe.id,'featuered')}}>Get Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default HomeFeaturedRecipe
