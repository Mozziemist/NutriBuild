import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  creator: String,
  name: String,
  recipeName: String,
  description: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  ingredients: [
    {
      name: String,
      amount: String,
    },
  ],
});

const recipeContent = mongoose.model("recipeContent", recipeSchema);

export default recipeContent;
