import { wrapper } from "../utils/wrapper.js";
import * as recipeService from "../services/recipe.js";
import { sendResponse } from "../utils/response.js";

// controller to create a new recipe
export const createRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe data from the request body
        const recipeData = req.body;

        // get the user id from the request object
        const { id } = req.user;

        // call the service to create a new recipe
        const recipe = await recipeService.createRecipe(id, recipeData);

        // send the response
        sendResponse(res, recipe, "Recipe created successfully!", 201);
    })(req, res, next);
};

// controller to update a recipe
export const updateRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id and recipe data from the request body
        const { id } = req.params;
        const recipeData = req.body;

        // call the service to update the recipe
        await recipeService.updateRecipe(id, recipeData);

        // send the response
        sendResponse(res, null, "Recipe updated successfully!", 200);
    })(req, res, next);
};

// controller to delete a recipe
export const deleteRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request body
        const { id } = req.params;

        // call the service to delete the recipe
        await recipeService.deleteRecipe(id);

        // send the response
        sendResponse(res, null, "Recipe deleted successfully!", 200);
    })(req, res, next);
};