import React from 'react'
import './CardsDishHome.css'

const CardsDishHome = ({ image, title })  => {
    return (
        <>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8 ">
                <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
                    {/* <figure><img src="src/assets/dishes/dish1.jpg" alt="Shoes" className='w-80 h-60 object-fit' /></figure> */}
                    <figure><img src={image} alt="Dish" className='w-80 h-60 object-fit' /></figure>
                    

                    <div className="card-body">
                        {/* <h2 className="card-title">Dish 1</h2> */}
                        <h2 className="card-title">{title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="bg-primary text-white  px-6 py-2 rounded-full">Get Recipe</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardsDishHome
