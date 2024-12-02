import { wrapper } from "../utils/wrapper.js";
import * as userService from "../services/user.js";
import { sendResponse } from "../utils/response.js";

// controller to get user by id
export const getUserById = wrapper(async (req, res) => {
    // get the user id from the request parameters
    const { id } = req.params;

    // call the service to get the user by id
    const user = await userService.getUserById(id);

    // send the response
    sendResponse(res, user, "User fetched successfully!", 200);
});

// controller to get user recipes
export const getUserRecipes = wrapper(async (req, res) => {
    // get the user id from the request parameters
    const { userId } = req.params;

    // call the service to get the user recipes
    const recipes = await userService.getUserRecipes(userId);

    // send the response
    sendResponse(res, recipes, "User recipes fetched successfully!", 200);
});

// controller to get logged in user profile
export const getProfile = wrapper(async (req, res) => {
    // get the user id from the request object
    const { id } = req.user;

    // call the service to get the user profile
    const user = await userService.getProfile(id);

    // send the response
    sendResponse(res, user, "User profile fetched successfully!", 200);
});

// controller to update user profile
export const updateProfile = wrapper(async (req, res) => {
    // get the user id from the request object
    const { id } = req.user;

    // get the updated user data from the request body
    const userData = req.body;

    // call the service to update the user profile
    await userService.updateProfile(id, userData);

    // send the response
    sendResponse(res, null, "User profile updated successfully!", 200);
});

// controller to follow a user
export const followUser = wrapper(async (req, res) => {
    // get the user id and the user to be followed id from the request parameters
    const { userId } = req.params;
    const followerId = req.user.id;

    // call the service to follow the user
    await userService.followUser(userId, followerId);

    // send the response
    sendResponse(res, null, "User followed successfully!", 200);
});

// controller to unfollow a user
export const unfollowUser = wrapper(async (req, res) => {
    // get the user id and the user to be unfollowed id from the request parameters
    const { userId } = req.params;
    const followerId = req.user.id;

    // call the service to unfollow the user
    await userService.unfollowUser(userId, followerId);

    // send the response
    sendResponse(res, null, "User unfollowed successfully!", 200);
});
