import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    created_at: { type: Date, default: Date.now }
});

const Like = mongoose.model('Like', LikeSchema);

export default Like;
