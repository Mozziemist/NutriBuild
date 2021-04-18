import React, { useEffect, useState } from "react";
import Recipes from "../Recipes/Recipes.js";
import Form from "../Form/Form.js";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    console.log("useEffect getRecipes");
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  return (
    <>
      {/******** Banner ************/}
      <div className="container d-flex justify-content-center display-3 bg-dark rounded mt-5 mb-5 myBorder">
        <div className="text-white">NutriBuild</div>
      </div>

      {/******** Main Section **********/}
      <div className="container-fluid">
        <Recipes setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </>
  );
};

export default Home;
