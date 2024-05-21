import React from "react";
import Signup from "./Pages/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import MainPage from "./Pages/MainPage";
import ViewRecipe from "./Pages/ViewRecipe";
import AuthorProfile from "./Pages/AuthorProfile";
import AddRecipe from "./Pages/AddRecipe";
import AlertPage from "./Pages/AlertPage";
import EditRecipe from "./Pages/EditRecipe";
import HomeRecipesView from "./Pages/HomeRecipesView";


const App = () => {
  return (
    // <Home/>

    // <Signup />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetpassword' element={<ForgotPassword />} />
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/viewrecipe/:recipeId' element={<ViewRecipe />}/>
        <Route path='/viewrecipe/:category/:id' element={<HomeRecipesView />}/>
        <Route path='/user/:UserID' element={<AuthorProfile />}/>
        <Route path='/addrecipe' element={<AddRecipe />}/>
        <Route path='/editrecipe' element={<EditRecipe />}/>
        <Route path="/alertpage" element={<AlertPage />}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
