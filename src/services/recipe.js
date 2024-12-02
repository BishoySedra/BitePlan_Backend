import User from "../db/models/user.js";
import Recipe from "../db/models/recipe.js";
import { createCustomError } from "../middlewares/errors/customError.js";

// service to get all recipes with optional pagination
export const getAllRecipes = async (page, limit) => {

    // set the page and limit
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    // calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // get all recipes with pagination
    const recipes = await Recipe.find({}, { __v: 0, created_at: 0, updated_at: 0 }).skip(skip).limit(limit);

    return recipes;
};

// service to get a recipe by id
export const getRecipeById = async (recipeId) => {

    // find the recipe by id
    const recipe = await Recipe.findOne({ _id: recipeId }, { __v: 0, created_at: 0, updated_at: 0 });

    // if the recipe does not exist, throw an error
    if (!recipe) {
        throw createCustomError("Recipe not found!", 404, null);
    }

    return recipe;
};

// service to create a new recipe
export const createRecipe = async (userId, recipeData) => {

    // create a new recipe
    const newRecipe = new Recipe({
        user_id: userId,
        ...recipeData
    });

    // save the recipe
    const recipe = await newRecipe.save();

    // increment the recipe count of the user
    await User.findByIdAndUpdate(userId, { $inc: { recipes: 1 } });

    // console.log(recipe);

    return recipe;
};

// service to update a recipe
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

// service to delete a recipe
export const deleteRecipe = async (recipeId) => {

    // find the recipe by id
    const recipe = await Recipe.findById(recipeId);

    // if the recipe does not exist, throw an error
    if (!recipe) {
        throw createCustomError("Recipe not found to be deleted!", 404, null);
    }

    // decrement the recipe count of the user
    await User.findByIdAndUpdate(recipe.user_id, { $inc: { recipes: -1 } });

    // delete the recipe
    await Recipe.findByIdAndDelete(recipeId);
};