import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    photos: { type: [String], default: [] },
    cuisine: { type: String },
    prep_time: { type: Number },
    cook_time: { type: Number },
    nutritional_facts: { type: Object }, // Use JSON for flexibility
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;