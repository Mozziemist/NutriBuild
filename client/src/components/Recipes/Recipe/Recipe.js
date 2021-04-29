import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions/recipes";

import "./RecipeStyle.css";

const Recipe = ({ recipe, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="card recipe myBorder">
      <img
        className="card-img-top"
        src={recipe.selectedFile}
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">{recipe.recipeName}</h4>
        <p className="card-text">{recipe.description}</p>
        <p>{recipe.name}</p>
        <p>{moment(recipe.createdAt).fromNow()}</p>

        {(user?.result?.googleId === recipe?.creator ||
          user?.result?._id === recipe?.creator) && (
          <div className="container d-flex justify-content-end align-items-end pt-5 pr-0">
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => setCurrentId(recipe._id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-sm btn-danger ml-1"
              onClick={() => dispatch(deleteRecipe(recipe._id))}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
