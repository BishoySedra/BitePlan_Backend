import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    rating: { type: Number, min: 1, max: 5 },
    review: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Rating = mongoose.model('Rating', RatingSchema);

export default Rating;
