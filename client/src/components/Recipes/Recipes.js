import React from "react";
import Recipe from "./Recipe/Recipe.js";
import { useSelector } from "react-redux";

import "./RecipesStyle.css";

const Recipes = ({ setCurrentId }) => {
  const recipes = useSelector((state) => state.recipes);

  return !recipes.length ? (
    <div className="container d-flex justify-content-center text-white">
      <h1>Fetching Recipes...</h1>
    </div>
  ) : (
    <div className="container-fluid d-flex flex-wrap recipes">
      {recipes.map((recipe) => {
        return (
          <div key={recipe._id}>
            <Recipe recipe={recipe} setCurrentId={setCurrentId} />
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
