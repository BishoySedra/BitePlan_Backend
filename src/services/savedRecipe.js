import SavedRecipe from "../db/models/savedRecipe.js";

import { createCustomError } from "../middlewares/errors/customError.js";

// service to save a recipe
export const saveRecipe = async (userId, recipeId) => {

    // check if the recipe is already saved
    const savedRecipe = await SavedRecipe.findOne({ user_id: userId, recipe_id: recipeId });

    // if the recipe is already saved, throw an error
    if (savedRecipe) {
        throw createCustomError("Recipe already saved!", 400, null);
    }

    // create a new saved recipe
    const newSavedRecipe = new SavedRecipe({
        user_id: userId,
        recipe_id: recipeId
    });

    // save the recipe
    const saved = await newSavedRecipe.save();

    return saved;
};

// service to get all saved recipes of a user
export const getSavedRecipes = async (userId) => {

    // get all saved recipes of the user
    const savedRecipes = await SavedRecipe.find({ user_id: userId }, { __v: 0, created_at: 0, updated_at: 0 });

    return savedRecipes;
};

// service to unsave a recipe
export const unsaveRecipe = async (userId, recipeId) => {

    // find the saved recipe
    const savedRecipe = await SavedRecipe.findOne({ user_id: userId, recipe_id: recipeId });

    // if the saved recipe does not exist, throw an error
    if (!savedRecipe) {
        throw createCustomError("Recipe not saved!", 400, null);
    }

    // delete the saved recipe
    await SavedRecipe.findByIdAndDelete(savedRecipe._id);

    return savedRecipe;
};