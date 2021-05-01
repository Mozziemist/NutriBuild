import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createRecipe, updateRecipe } from "../../actions/recipes.js";

import "./FormStyel.css";

const Form = ({ currentId, setRecipeId }) => {
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    description: "",
    selectedFile: "",
    ingredients: [],
  });

  const [ingredient, setIngredient] = useState({ name: "", amount: "" });

  const recipe = useSelector((state) =>
    currentId ? state.recipes.find((p) => p._id === currentId) : null
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (recipe) setRecipeData(recipe);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if an id was passed to form, then we are updating a recipe
    // instead of creating a new recipe
    if (currentId) {
      // might need to pass in user name along update recipe if db doesn't keep original
      dispatch(updateRecipe(currentId, recipeData));
    } else {
      dispatch(createRecipe({ ...recipeData, name: user?.result?.name }));
    }

    clear();
    history.push("/");
  };

  const clear = (e) => {
    setRecipeId(null);

    setRecipeData({
      recipeName: "",
      description: "",
      selectedFile: "",
      ingredients: [],
    });
  };

  const addIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ingredient],
    });
    console.log(ingredient);

    setIngredient({ name: "", amount: "" });
  };

  if (!user) {
    history.push("/auth");
  }

  return (
    <div className="d-flex justify-content-center m-5">
      <form className="form myBorder p-2" onSubmit={handleSubmit}>
        <h2>{currentId ? "Edit" : "Create"} Recipe</h2>
        {/******File Upload*********/}
        <div className="form-group">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
          />
        </div>
        {/******Recipe Name*********/}
        <div className="form-group">
          <label htmlFor="recipeName">Recipe Name</label>
          <textarea
            className="form-control"
            id="recipeName"
            rows="1"
            value={recipeData.recipeName}
            required="required"
            onChange={(e) =>
              setRecipeData({ ...recipeData, recipeName: e.target.value })
            }
          ></textarea>
        </div>
        {/******Description*********/}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={recipeData.description}
            required="required"
            onChange={(e) =>
              setRecipeData({ ...recipeData, description: e.target.value })
            }
          ></textarea>
        </div>
        {/******Add Ingredient*********/}
        <label htmlFor="ingredient">Add ingredients</label>
        <div className="form-group row">
          <div className="col-6 pr-2 pb-2">
            <input
              id="ingredient"
              type="text"
              className="form-control"
              name="ingredient"
              placeholder="Ingredient"
              value={ingredient.name}
              onChange={(e) =>
                setIngredient({ ...ingredient, name: e.target.value })
              }
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              name="amount"
              placeholder="Amount"
              value={ingredient.amount}
              onChange={(e) =>
                setIngredient({ ...ingredient, amount: e.target.value })
              }
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={addIngredient}
            >
              +
            </button>
          </div>
        </div>
        {/******Ingredient List*********/}
        {recipeData.ingredients.map((ing) => {
          return (
            <p className="bg-white w-50 m-2">
              {ing.name}: {ing.amount}
            </p>
          );
        })}
        {/******Submit and Clear Buttons*********/}
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
        <button type="button" className="btn btn-danger m-2" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
