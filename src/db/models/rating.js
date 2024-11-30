import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String },
    created_at: { type: Date, default: Date.now }
});

const Rating = mongoose.model('Rating', RatingSchema);

export default Rating;
