import React, { useState } from "react";
import Recipe from "./Recipe/Recipe.js";
import { useSelector } from "react-redux";

import "./RecipesStyle.css";

const Recipes = ({ filter }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const recipes = useSelector((state) => {
    return filter
      ? state.recipes.filter((recipe) => recipe.name === user.result.name)
      : state.recipes;
  });

  return !recipes.length ? (
    <div className="container d-flex justify-content-center text-white">
      <h1>Fetching Recipes...</h1>
    </div>
  ) : (
    <div className="container-fluid d-flex flex-wrap recipes mb-5">
      {recipes.map((recipe) => {
        return (
          <div key={recipe._id}>
            <Recipe recipe={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
