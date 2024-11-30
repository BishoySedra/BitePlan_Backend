import mongoose from "mongoose";

const SavedRecipeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    created_at: { type: Date, default: Date.now }
});

const SavedRecipe = mongoose.model('SavedRecipe', SavedRecipeSchema);

export default SavedRecipe;