import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    cooking_steps: { type: String, required: true },
    recipe_photo: { type: String },
    nutritional_information: { type: String }, // Use JSON for flexibility
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;