import React from "react";
import Recipes from "../Recipes/Recipes";

const MyRecipes = () => {
  return (
    <div className="container-fluid">
      <Recipes filter={true} />
    </div>
  );
};

export default MyRecipes;
