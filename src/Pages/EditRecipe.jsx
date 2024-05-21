import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import axios from 'axios'
import { useNavigate } from 'react-router';

const EditRecipe = () => {

  const navigate = useNavigate()

  const role = sessionStorage.getItem('role');
  const id = sessionStorage.getItem('userId');
  console.log(id);

  const [inputs, setInput] = useState({
    recipename: '',
    ingredients: '',
    instructions: '',
    images: '',
  })

  const [formErrors, setFormErrors] = useState({});
  const [toSubmit, setToSubmit] = useState(false);

  const handleValidate = (values) => {
    var errors = {};

    if (!values.recipename.trim()) {
      errors.recipename = 'Recipename required';
    } else if (!/^[a-zA-Z\s]+$/.test(values.recipename.trim())) {
      errors.recipename = 'Invalid characters in Recipename';
    }

    if (!values.ingredients.trim()) {
      errors.ingredients = 'Ingredients required';
    }

    if (!values.instructions.trim()) {
      errors.instructions = 'Enter instructions';
    }

    if (!values.images) {
      errors.images = 'Enter images';
    }

    return errors;
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const {ingredients} = inputs
    console.log(ingredients.split(","))

    const ingredientsArr = ingredients.split(",");
    console.log( inputs.images)

    const formData = new FormData();
    // formData.append('images', inputs.images)
    formData.append('recipename', inputs.recipename)
    formData.append('ingredients', ingredientsArr)
    formData.append('instructions', inputs.instructions)
    inputs.images.forEach(image => {
      formData.append("images",image)
    });

    setFormErrors(handleValidate(inputs))
    setToSubmit(true)

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }


    if (Object.keys(formErrors).length == 0 && toSubmit === true) {
      axios.post(`http://localhost:2001/recipe/addrecipe/${id}`, formData).then((res) => {
        //   toast.success(res.data.message)
        alert(res.data.message);
      }).catch((error) => {
        //   toast.error(error.response.data.message);
        alert(res.data.message);
      })
      console.log("Successfully submitted");
    }
  }

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({ ...inputs, [name]: value })
  }

  const onImageChange = (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    const file = Array.from(fileList).map(file => file)
    console.log(file)
    setInput({ ...inputs, images: file })
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-2 flex items-center justify-center">
        <div className="bg-white p-4 rounded-sm shadow-md w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Edit a recipe</h1>
          <form className="space-y-4" encType='multipart/form-data'>
            <div>
              <label htmlFor="recipeName" className="block text-sm font-semibold mb-2">Recipe Name
                <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}> {formErrors.recipename}</span>
              </label>
              <input
                type="text" id="recipeName" name="recipename"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="E.g., Spaghetti Bolognese" onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, recipename: '' }) }}
              />
            </div>
            
             <div>
              <label htmlFor="ingredients" className="block text-sm font-semibold mb-2">Ingredients
                <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}> {formErrors.ingredients}</span>
              </label>
              <textarea
                id="ingredients" name="ingredients" rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 resize-none focus:outline-none focus:border-blue-500"
                placeholder="Enter ingredients separated by commas" onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, ingredients: '' }) }}
              ></textarea>
            </div>

            <div>
              <label htmlFor="instructions" className="block text-sm font-semibold mb-2">Instructions
                <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}> {formErrors.instructions}</span>
              </label>
              <textarea
                id="instructions" name="instructions" rows="6"
                className="w-full border border-gray-300 rounded-md py-2 px-3 resize-none focus:outline-none focus:border-blue-500"
                placeholder="Step-by-step instructions" onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, instructions: '' }) }}
              ></textarea>
            </div>

            <div>
              <label htmlFor="images" className="block text-sm font-semibold mb-2">Images
                <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}> {formErrors.images}</span>
              </label>
              <input type="file" id="images" name="images" accept="image/*"
                multiple
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={onImageChange} onClick={() => { setFormErrors({ ...formErrors, images: '' }) }}
              />
            </div>

            <div className="flex justify-center">
             
                
                <button type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-sm hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                onClick={handleSubmitForm}> Add Recipe </button> 
              
              
            </div>
            
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditRecipe;
