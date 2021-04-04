import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createRecipe } from "../../actions/recipes.js";

import "./FormStyel.css";

const Form = () => {
  const [recipeData, setRecipeData] = useState({
    creator: "",
    recipeName: "",
    description: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ui dispatch ", recipeData);
    dispatch(createRecipe(recipeData));
  };

  const clear = (e) => {};

  return (
    <div className="d-flex justify-content-center">
      <form className="form" onSubmit={handleSubmit}>
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
        <button className="btn btn-danger m-2" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
