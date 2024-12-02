import { wrapper } from "../utils/wrapper.js";
import * as recipeService from "../services/recipe.js";
import { sendResponse } from "../utils/response.js";

// controller to get all recipes
export const getAllRecipes = (req, res, next) => {
    wrapper(async (req, res, next) => {

        // getting the page and limit from the query parameters
        const { page, limit } = req.query;

        // call the service to get all recipes
        const recipes = await recipeService.getAllRecipes(page, limit);

        // send the response
        sendResponse(res, recipes, "Recipes fetched successfully!", 200);
    })(req, res, next);
};

// controller to get a recipe by id
export const getRecipeById = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request parameters
        const { id } = req.params;

        // call the service to get the recipe by id
        const recipe = await recipeService.getRecipeById(id);

        // send the response
        sendResponse(res, recipe, "Recipe fetched successfully!", 200);
    })(req, res, next);
}

// controller to add a review to a recipe for not logged in users
export const addReview = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id and review data from the request body
        const { id } = req.params;
        const reviewData = req.body;

        // call the service to add a review to the recipe
        await recipeService.addReview(id, reviewData);

        // send the response
        sendResponse(res, null, "Review added successfully!", 200);
    })(req, res, next);
};

// controller to get all reviews of a recipe
export const getReviews = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request parameters
        const { id } = req.params;

        // call the service to get all reviews of the recipe
        const reviews = await recipeService.getReviews(id);

        // send the response
        sendResponse(res, reviews, "Reviews fetched successfully!", 200);
    })(req, res, next);
};

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

// controller to like a recipe
export const likeRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request body
        const { id } = req.params;

        // get the user id from the request object
        const { id: userId } = req.user;

        // call the service to like the recipe
        await recipeService.likeRecipe(id, userId);

        // send the response
        sendResponse(res, null, "Recipe liked successfully!", 200);
    })(req, res, next);
};

// controller to unlike a recipe
export const unlikeRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request body
        const { id } = req.params;

        // get the user id from the request object
        const { id: userId } = req.user;

        // call the service to unlike the recipe
        await recipeService.unlikeRecipe(id, userId);

        // send the response
        sendResponse(res, null, "Recipe unliked successfully!", 200);
    })(req, res, next);
};

// controller to comment on a recipe
export const commentRecipe = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id and comment data from the request body
        const { id } = req.params;
        const { comment } = req.body;

        // get the user id from the request object
        const { id: userId } = req.user;

        // call the service to comment on the recipe
        await recipeService.commentRecipe(id, userId, comment);

        // send the response
        sendResponse(res, null, "Comment added successfully!", 200);
    })(req, res, next);
};

// controller to get all comments on a specific recipe
export const getComments = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the recipe id from the request body
        const { id } = req.params;

        // call the service to get all comments on the recipe
        const comments = await recipeService.getComments(id);

        // send the response
        sendResponse(res, comments, "Comments fetched successfully!", 200);
    })(req, res, next);
};