import React, { useEffect, useState } from "react";
import Recipes from "../Recipes/Recipes.js";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect getRecipes");
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      {/******** Banner ************/}
      <div className="container d-flex justify-content-center display-3 bg-dark rounded mt-5 mb-5 myBorder">
        <div className="text-white">NutriBuild</div>
      </div>

      <div className="container d-flex justify-content-center my-5">
        <Link to="/create">
          <button type="button" className="btn btn-primary">
            Create Recipe
          </button>
        </Link>
      </div>

      {/******** Main Section **********/}
      <div className="container-fluid">
        <Recipes />
      </div>
    </>
  );
};

export default Home;
