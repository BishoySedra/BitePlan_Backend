import mongoose from "mongoose";

const MealPlanSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    week_start_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now }
});

const MealPlan = mongoose.model('MealPlan', MealPlanSchema);

export default MealPlan;