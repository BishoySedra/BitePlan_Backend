import { wrapper } from "../utils/wrapper.js";
import * as mealPlanService from "../services/mealPlan.js";
import { sendResponse } from "../utils/response.js";

// controller to create a new meal plan
export const createMealPlan = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the meal plan recipe data from the request body
        const mealPlanRecipeData = req.body;

        // get the user id from the request object
        const { id } = req.user;

        // call the service to create a new meal plan recipe
        const mealPlanRecipe = await mealPlanService.createMealPlan(id, mealPlanRecipeData);

        // send the response
        sendResponse(res, mealPlanRecipe, "Meal Plan Recipe created successfully!", 201);
    })(req, res, next);
};

// controller to get all meal plans of logged in user
export const getAllMealPlans = (req, res, next) => {
    wrapper(async (req, res, next) => {

        // get the user id from the request object
        const { id } = req.user;

        // call the service to get all meal plan recipes of logged in user
        const mealPlanRecipes = await mealPlanService.getAllMealPlans(id);

        // send the response
        sendResponse(res, mealPlanRecipes, "Meal Plan Recipes fetched successfully!", 200);
    })(req, res, next);
};

// controller to update a meal plan
export const updateMealPlan = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the meal plan recipe id and meal plan recipe data from the request body
        const { id } = req.params;
        const mealPlanRecipeData = req.body;

        // call the service to update the meal plan recipe
        await mealPlanService.updateMealPlan(id, mealPlanRecipeData);

        // send the response
        sendResponse(res, null, "Meal Plan Recipe updated successfully!", 200);
    })(req, res, next);
};

// controller to delete a meal plan
export const deleteMealPlan = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the meal plan recipe id from the request body
        const { id } = req.params;

        // call the service to delete the meal plan recipe
        await mealPlanService.deleteMealPlan(id);

        // send the response
        sendResponse(res, null, "Meal Plan Recipe deleted successfully!", 200);
    })(req, res, next);
};

