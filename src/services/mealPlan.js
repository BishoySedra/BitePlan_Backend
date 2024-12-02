import MealPlan from "../db/models/mealPlan.js"
import MealPlanRecipe from "../db/models/mealPlanRecipe.js"

import { createCustomError } from "../middlewares/errors/customError.js";

// service to create a new meal plan
export const createMealPlan = async (userId, mealPlanRecipeData) => {
    // get the meal plan recipe data
    const { week_start_date, recipes } = mealPlanRecipeData;

    // create a new meal plan
    const mealPlan = new MealPlan({
        user_id: userId,
        week_start_date
    });

    // save the meal plan
    await mealPlan.save();

    // create an array of meal plan recipes
    const mealPlanRecipes = recipes.map(recipe => {
        return {
            meal_plan_id: mealPlan._id,
            recipe_id: recipe.recipe_id,
            meal_type: recipe.meal_type,
            day_of_week: recipe.day_of_week
        }
    });

    // create the meal plan recipes
    await MealPlanRecipe.insertMany(mealPlanRecipes);

    return mealPlan;
};

// service to get all meal plans of logged in user
export const getAllMealPlans = async (userId) => {
    // get all meal plans of logged in user
    const mealPlans = await MealPlan.find({ user_id: userId });

    return mealPlans;
};

// service to update a meal plan
export const updateMealPlan = async (mealPlanId, mealPlanRecipeData) => {
    // get the meal plan recipe data
    const { recipes } = mealPlanRecipeData;

    // delete all the meal plan recipes of the meal plan
    await MealPlanRecipe.deleteMany({ meal_plan_id: mealPlanId });

    // create an array of meal plan recipes
    const mealPlanRecipes = recipes.map(recipe => {
        return {
            meal_plan_id: mealPlanId,
            recipe_id: recipe.recipe_id,
            meal_type: recipe.meal_type,
            day_of_week: recipe.day_of_week
        }
    });

    // create the meal plan recipes
    await MealPlanRecipe.insertMany(mealPlanRecipes);
};

// service to delete a meal plan
export const deleteMealPlan = async (mealPlanId) => {
    // delete the meal plan
    await MealPlan.findByIdAndDelete(mealPlanId);

    // delete all the meal plan recipes of the meal plan
    await MealPlanRecipe.deleteMany({ meal_plan_id: mealPlanId });
};