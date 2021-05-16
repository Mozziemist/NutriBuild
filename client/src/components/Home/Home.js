import React, { useEffect } from "react";
import Recipes from "../Recipes/Recipes.js";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import Banner from "../Banner/Banner";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      {/******** Banner ************/}
      <Banner />

      {/******** Main Section **********/}
      <div className="container-fluid">
        <Recipes filter={false} />
      </div>
    </>
  );
};

export default Home;
