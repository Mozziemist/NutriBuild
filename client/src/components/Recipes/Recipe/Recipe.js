import React from "react";
import moment from "moment";

import "./RecipeStyle.css";

const Recipe = ({ recipe, setCurrentId }) => {
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
        <p>{recipe.creator}</p>
        <p>{moment(recipe.createdAt).fromNow()}</p>

        <div className="container d-flex justify-content-end align-items-end pt-5 pr-0">
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onClick={() => setCurrentId(recipe._id)}
          >
            Edit
          </button>
          <button type="button" class="btn btn-sm btn-danger ml-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
