import mongoose from "mongoose";

const FollowerSchema = new mongoose.Schema({
    follower_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    followed_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

const Follower = mongoose.model('Follower', FollowerSchema);

export default Follower;
