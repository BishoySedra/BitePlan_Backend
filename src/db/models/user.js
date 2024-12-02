import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile_picture: { type: String, default: '' },
    bio: { type: String, default: '' },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    recipes: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);
export default User;