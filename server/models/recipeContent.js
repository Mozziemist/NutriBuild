import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
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
});

const recipeContent = mongoose.model("recipeContent", recipeSchema);

export default recipeContent;
