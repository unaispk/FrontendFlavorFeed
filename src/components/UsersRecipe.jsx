// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router';



// const UsersRecipe = () => {

//     const [recipes, setRecipe] = useState([]);

//     const navigate = useNavigate();

//     const UserID = sessionStorage.getItem('userId');


//     useEffect(() => {
//         try {
//             axios.get(`http://localhost:2001/recipe/view-user-recipes/${UserID}`)
//                 .then((res) => {
//                     setRecipe(res.data.data)
//                     console.log(res.data.data);
//                     console.log("Response of profile :  ", res)
//                 })
//         } catch (error) {
//             console.error("Error in useEffect:", error);
//         }
//     }, [])


//     return (
//         <>


//             <div className="flex flex-wrap">
//                 {recipes.filter(recipe => recipe.status === 'approved').map((recipe, key) => (
//                     <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
//                         <div className="card card-compact w-64 bg-white shadow-xl rounded-none transition transform hover:scale-105">
//                             <figure>
//                                 <img src={`/images/uploads/${recipe.images[0]}`} alt="image" className='w-full h-60 object-cover' />
//                             </figure>
//                             <div className="card-body p-4">
//                                 <h2 className="card-title text-xl font-semibold mb-2">{recipe.recipename}</h2>
//                                 <div className="card-actions flex justify-center">
//                                     <button onClick={() => { navigate(`/viewrecipe/${recipe._id}`) }} className="bg-primary text-white px-6 py-2 rounded-full">Get Recipe</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>



//         </>
//     )
// }

// export default UsersRecipe
