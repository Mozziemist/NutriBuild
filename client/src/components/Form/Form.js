import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import {
  createRecipe,
  getRecipes,
  updateRecipe,
} from "../../actions/recipes.js";

import "./FormStyel.css";

const Form = ({ currentId, setCurrentId }) => {
  const [recipeData, setRecipeData] = useState({
    creator: "",
    recipeName: "",
    description: "",
    selectedFile: "",
  });

  const recipe = useSelector((state) =>
    currentId ? state.recipes.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipe) setRecipeData(recipe);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if an id was passed to form, then we are updating a recipe
    // instead of creating a new recipe
    if (currentId) {
      dispatch(updateRecipe(currentId, recipeData));
    } else {
      dispatch(createRecipe(recipeData));
    }

    clear();
  };

  const clear = (e) => {
    setCurrentId(null);

    setRecipeData({
      creator: "",
      recipeName: "",
      description: "",
      selectedFile: "",
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form myBorder" onSubmit={handleSubmit}>
        <h2>{currentId ? "Edit" : "Create"} Recipe</h2>
        <div className="form-group">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="creator">UserName</label>
          <textarea
            className="form-control"
            id="creator"
            rows="1"
            value={recipeData.creator}
            onChange={(e) =>
              setRecipeData({ ...recipeData, creator: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="recipeName">Recipe Name</label>
          <textarea
            className="form-control"
            id="recipeName"
            rows="1"
            value={recipeData.recipeName}
            onChange={(e) =>
              setRecipeData({ ...recipeData, recipeName: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={recipeData.description}
            onChange={(e) =>
              setRecipeData({ ...recipeData, description: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
        <button type="button" className="btn btn-danger m-2" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
