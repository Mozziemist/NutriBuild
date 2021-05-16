import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { deleteRecipe, findRecipe } from "../../../actions/recipes";
import "./RecipeFullStyle.css";

const RecipeFull = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.find((recipe) => recipe._id === id)
  );

  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const dispatch = useDispatch();

  if (!recipe) {
    dispatch(findRecipe(id));
  }

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  return (
    <div className="container d-flex justify-content-center my-5">
      {recipe ? (
        <div className="card bg-custom recipeFull myBorder">
          <img
            className="card-img-top"
            src={recipe.selectedFile}
            alt="Card cap"
          />

          <div className="card-body">
            <h3 className="card-title border-bottom">{recipe.recipeName}</h3>
            <p className="card-text">{recipe.description}</p>
            <p>by {recipe.name}</p>
            <p className="text-secondary">
              {moment(recipe.createdAt).fromNow()}
            </p>
            {/**********Ingredients list************/}
            <div className="border rounded p-1">
              <p>Ingredients:</p>
              <div className="d-flex flex-wrap">
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <span
                      className="px-1 m-1 bg-success text-nowrap text-white rounded"
                      key={ingredient.name}
                    >
                      {ingredient.name}: {ingredient.amount}
                    </span>
                  );
                })}
              </div>
            </div>
            {/**********Instructions************/}
            <h5 className="mt-4 font-weight-bold">Instructions:</h5>
            <p>{recipe.instructions}</p>

            {/**********Edit and Delete************/}
            {(user?.result?.googleId === recipe?.creator ||
              user?.result?._id === recipe?.creator) && (
              <div className="container d-flex justify-content-end align-items-end pt-5 pr-0">
                <button
                  type="button"
                  className="btn btn-sm btn-warning"
                  onClick={() =>
                    history.push({
                      pathname: "/create",
                      state: { recipeId: recipe._id },
                    })
                  }
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger ml-1"
                  onClick={() => dispatch(deleteRecipe(recipe._id))}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h2 className="text-white">not found</h2>
      )}
    </div>
  );
};

export default RecipeFull;
