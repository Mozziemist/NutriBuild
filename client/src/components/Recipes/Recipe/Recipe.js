import React from "react";
import moment from "moment";

const Recipe = ({ recipe }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={recipe.selectedFile}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.recipeName}</h5>
        <p className="card-text">{recipe.description}</p>
        <p>{recipe.creator}</p>
        <p>{moment(recipe.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default Recipe;
