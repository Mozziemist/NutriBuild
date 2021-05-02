import express from "express";

import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  findRecipe,
} from "../controllers/recipes.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", findRecipe);
router.post("/", auth, createRecipe);
router.patch("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);

export default router;
