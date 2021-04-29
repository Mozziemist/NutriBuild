import mongoose from "mongoose";
import RecipeContent from "../models/recipeContent.js";

export const getRecipes = async (req, res) => {
  try {
    const recipeContentList = await RecipeContent.find();

    res.status(200).json(recipeContentList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;

  const newRecipe = new RecipeContent({
    ...recipe,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id: _id } = req.params;
  const recipe = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedRecipe = await RecipeContent.findByIdAndUpdate(_id, recipe, {
    new: true,
  });

  res.json(updatedRecipe);
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await RecipeContent.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};
