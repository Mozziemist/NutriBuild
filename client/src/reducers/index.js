import { combineReducers } from "redux";
import recipes from "./recipes.js";
import authReducer from "./auth";

export default combineReducers({
  recipes,
  authReducer,
});
