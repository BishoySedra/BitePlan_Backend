import Recipe from "../db/models/recipe.js";
import { createCustomError } from "../middlewares/errors/customError.js";

export const createRecipe = async (userId, recipeData) => {

    // create a new recipe
    const newRecipe = new Recipe({
        user_id: userId,
        ...recipeData
    });

    // save the recipe
    const recipe = await newRecipe.save();

    // console.log(recipe);

    return recipe;
};

export const updateRecipe = async (recipeId, recipeData) => {

    // find the recipe by id
    const recipe = await Recipe.findById(recipeId);

    // if the recipe does not exist, throw an error
    if (!recipe) {
        throw createCustomError("Recipe not found to be updated!", 404, null);
    }

    // update the recipe
    await Recipe.findByIdAndUpdate(recipeId, recipeData);
};

export const deleteRecipe = async (recipeId) => {

    // find the recipe by id
    const recipe = await Recipe.findById(recipeId);

    // if the recipe does not exist, throw an error
    if (!recipe) {
        throw createCustomError("Recipe not found to be deleted!", 404, null);
    }

    // delete the recipe
    await Recipe.findByIdAndDelete(recipeId);
};