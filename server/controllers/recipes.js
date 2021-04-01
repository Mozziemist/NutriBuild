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

  const newRecipe = new RecipeContent(recipe);

  try {
    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
