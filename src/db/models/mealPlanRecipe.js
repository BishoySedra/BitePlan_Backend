import mongoose from 'mongoose';

const MealPlanRecipeSchema = new mongoose.Schema({
    meal_plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MealPlan', required: true },
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    meal_type: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true },
    day_of_week: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true }
});

const MealPlanRecipe = mongoose.model('MealPlanRecipe', MealPlanRecipeSchema);

export default MealPlanRecipe;