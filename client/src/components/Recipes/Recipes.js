import React from "react";
import Recipe from "./Recipe/Recipe.js";
import { useSelector } from "react-redux";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);

  return !recipes.length ? (
    <h1>No Recipes</h1>
  ) : (
    <div className="container d-flex flex-wrap">
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
