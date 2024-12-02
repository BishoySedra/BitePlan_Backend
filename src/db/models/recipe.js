import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe_name: { type: String, required: true },
    ingredients: { type: String, required: true },
    cooking_steps: { type: String, required: true },
    recipe_photo: { type: String },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    nutritional_information: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;