import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../actions/recipes";
import { useHistory, Link } from "react-router-dom";

import "./RecipeStyle.css";

const Recipe = ({ recipe }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="card recipe myBorder">
      <Link to={`/recipe/${recipe._id}`}>
        <img
          className="card-img-top"
          src={recipe.selectedFile}
          alt="Card cap"
        />
      </Link>

      <div className="card-body">
        <h4 className="card-title border-bottom">{recipe.recipeName}</h4>
        <p className="card-text">{recipe.description}</p>
        <p>by {recipe.name}</p>
        <p className="text-secondary">{moment(recipe.createdAt).fromNow()}</p>

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
  );
};

export default Recipe;
