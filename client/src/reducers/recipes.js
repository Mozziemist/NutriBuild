import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../actions/actionTypes.js";
export default (recipes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...recipes, action.payload];
    case UPDATE:
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    case DELETE:
      return recipes.filter((recipe) => recipe._id !== action.payload);
    default:
      return recipes;
  }
};
