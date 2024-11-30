import mongoose from 'mongoose';

const ShoppingListSchema = new mongoose.Schema({
    meal_plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MealPlan', required: true },
    ingredients: { type: [String], required: true },
    created_at: { type: Date, default: Date.now }
});

const ShoppingList = mongoose.model('ShoppingList', ShoppingListSchema);

export default ShoppingList;