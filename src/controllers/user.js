import { wrapper } from "../utils/wrapper.js";
import * as userService from "../services/user.js";
import { sendResponse } from "../utils/response.js";

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
