import React from 'react';
import MainRecipeCard from '../components/MainRecipeCard/MainRecipeCard';
import Navbar from '../components/Navbar/Navbar';

const AuthorProfile = () => {

    return (
        <>
            <Navbar />

            <div className="bg-yellow-100  p-6 rounded-md shadow-md flex items-center">
                <img src='src/assets/userprofileImg.jpg' alt="author_name" className="w-24 h-24 rounded-full mr-8" />

                <div>
                    <h1 className="text-3xl font-bold mb-2"> Unais</h1>
                    <p className="text-gray-600">Passionate cook and food enthusiast.</p>
                </div>
            </div>

            <div className="mt-2">
                <h2 className="text-3xl font-semibold text-center ">All Recipes by Unais</h2>
            </div>
            {/* <div className="flex flex-wrap justify-around mx-4 mb-8 mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                                <MainRecipeCard />
                            </div>
                        </div> */}
            <div className="row mx-4 mb-8 mt-4">
                <div className=" col ">
                    <MainRecipeCard />
                </div>
            </div>
            {/* <div class="md:flex md:justify-around md:mx-6 mb-8 mt-4">
                <div class="md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mb-8">
                    <MainRecipeCard />
                </div>
            </div> */}

        </>
    );
};

export default AuthorProfile;
