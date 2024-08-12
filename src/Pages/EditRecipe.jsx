import React, { useEffect, useState } from 'react';
import { FiClock, FiHeart } from 'react-icons/fi';
import { MdEdit, MdSave } from 'react-icons/md';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { useParams } from 'react-router';
import { Carousel } from 'flowbite-react';

const EditRecipe = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editableDetails, setEditableDetails] = useState({});
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2001/recipe/viewsinglerecipe/${recipeId}`)
      .then((res) => {
        setRecipeDetails(res.data.data);
        setEditableDetails(res.data.data); 
      })
      .catch((error) => {
        console.error("Error in fetching recipe:", error);
      });
  }, [recipeId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append('recipename', editableDetails.recipename);
    formData.append('ingredients', editableDetails.ingredients.join(','));
    formData.append('instructions', editableDetails.instructions);

    newImages.forEach((image, index) => {
      formData.append('images', image);
    });

    axios.put(`http://localhost:2001/recipe/updaterecipe/${recipeId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      setRecipeDetails(editableDetails);
      setIsEditing(false);
      alert("Recipe updated successfully");
    })
    .catch((error) => {
      console.error("Error updating recipe:", error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableDetails({ ...editableDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
  };

  const images = newImages.length > 0 ? newImages.map(file => URL.createObjectURL(file)) : recipeDetails.images;
  const ingredientsString = editableDetails.ingredients ? editableDetails.ingredients.join('\n') : '';
  const instructions = editableDetails.instructions;

  return (
    <>
      <div className="flex justify-center mt-4 mb-6">
        <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <>
                <span className='text-gray-600 text-sm'>{isEditing ? 'Save' : 'Edit'}</span>
                <IconButton aria-label="edit" onClick={isEditing ? handleSaveClick : handleEditClick}>
                  {isEditing ? <MdSave /> : <MdEdit />}
                </IconButton>
              </>
            }
            title="User name"
            subheader="September 14, 2016"
          />
          <h1 className="text-4xl font-bold mb-4">
            {isEditing ? (
              <input
                type="text"
                name="recipename"
                value={editableDetails.recipename || ''}
                onChange={handleChange}
                className="border rounded p-1 w-full"
              />
            ) : (
              recipeDetails.recipename
            )}
          </h1>

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-4">
            <Carousel className="custom-carousel">
              {images ? (
                images.map((image, key) => (
                  <img
                    key={key}
                    src={image}
                    alt="Recipe"
                    className="w-full h-64 object-cover rounded-md"
                  />
                ))
              ) : (
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-placeholder.svg"
                  alt="Placeholder"
                  className="w-full h-64 object-cover rounded-md"
                />
              )}
            </Carousel>
          </div>

          {isEditing && (
            <div className="mt-2 mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Upload new images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              />
            </div>
          )}

          <div className="flex items-center space-x-4 mb-4">
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
            {isEditing ? (
              <textarea
                name="ingredients"
                value={ingredientsString}
                onChange={(e) => setEditableDetails({ ...editableDetails, ingredients: e.target.value.split('\n') })}
                className="border rounded p-2 w-full h-32"
              />
            ) : (
              <ul className="list-disc pl-4">
                {editableDetails.ingredients && editableDetails.ingredients.length > 0 ? (
                  editableDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))
                ) : (
                  <li>No ingredients available</li>
                )}
              </ul>
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <hr className='h-px my-8 bg-gray-400 border-0 dark:bg-gray-700' />
            {isEditing ? (
              <textarea
                name="instructions"
                value={instructions || ''}
                onChange={handleChange}
                className="border rounded p-2 w-full h-32"
              />
            ) : (
              <article>
                <p>{instructions}</p>
              </article>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditRecipe;
