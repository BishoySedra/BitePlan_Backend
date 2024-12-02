import User from "../db/models/user.js";
import Recipe from "../db/models/recipe.js";
import { createCustomError } from "../middlewares/errors/customError.js";

// service to get user by id
export const getUserById = async (userId) => {
    // find the user by id
    const user = await User.findOne({ _id: userId }, { password: 0, __v: 0, created_at: 0, updated_at: 0 });

    // if user not found
    if (!user) {
        throw createCustomError("User not found!", 404, null);
    }

    // return the user with the password field removed
    return user;
};

// service to get user recipes
export const getUserRecipes = async (userId) => {
    // find the recipes posted by the user
    const recipes = await Recipe.find({ user_id: userId }, { __v: 0, created_at: 0, updated_at: 0 });

    // return the recipes
    return recipes;
};

// service to get logged in user profile
export const getProfile = async (userId) => {
    // find the user by id
    const user = await User.findOne({ _id: userId }, { password: 0, __v: 0, created_at: 0, updated_at: 0, _id: 0 });

    // if user not found
    if (!user) {
        throw createCustomError("User not found!", 404, null);
    }

    // return the user with the password field removed
    return user;
};

// service to update user profile
export const updateProfile = async (userId, userData) => {

    // check if user data is present
    if (userData === null || userData === undefined) {
        throw createCustomError("Please provide the user data to be updated!", 400, null);
    }

    // check if the user exists
    const user = await User.findOne({ _id: userId });

    // if user not found
    if (!user) {
        throw createCustomError("User not found to be updated!", 404, null);
    }

    // check if the email is already taken
    if (userData.email) {
        const foundUser = await User.findOne({ email: userData.email });

        if (foundUser && foundUser._id.toString() !== userId) {
            throw createCustomError("Email already taken!", 400, null);
        }
    }

    // update the user profile
    await User.findOneAndUpdate({ _id: userId }, { ...userData });
};