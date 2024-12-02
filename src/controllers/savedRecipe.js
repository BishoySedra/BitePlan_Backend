import { wrapper } from "../utils/wrapper.js";
import * as savedRecipeService from "../services/savedRecipe.js";
import { sendResponse } from "../utils/response.js";

// controller to save a recipe
export const saveRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request parameters
        const { id } = req.params;

        // get the user id from the request object
        const { id: userId } = req.user;

        // call the service to save the recipe
        await savedRecipeService.saveRecipe(userId, id);

        // send the response
        sendResponse(res, null, "Recipe saved successfully!", 201);
    })(req, res, next);
};

// controller to get all saved recipes
export const getSavedRecipes = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the user id from the request object
        const { id } = req.user;

        // call the service to get all saved recipes
        const savedRecipes = await savedRecipeService.getSavedRecipes(id);

        // send the response
        sendResponse(res, savedRecipes, "Saved recipes fetched successfully!", 200);
    })(req, res, next);
};

// controller to delete a saved recipe
export const deleteSavedRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request parameters
        const { id } = req.params;

        // get the user id from the request object
        const { id: userId } = req.user;

        // call the service to delete the saved recipe
        await savedRecipeService.unsaveRecipe(userId, id);

        // send the response
        sendResponse(res, null, "Saved recipe deleted successfully!", 200);
    })(req, res, next);
};