import { wrapper } from "../utils/wrapper.js";
import * as authService from "../services/auth.js";
import { sendResponse } from "../utils/response.js";

export const register = (req, res) => {
    wrapper(async (req, res) => {
        // get the name, email and password from the request body
        const { name, email, password } = req.body;

        // create a new user
        const user = await authService.register({ name, email, password });

        // send the response
        sendResponse(res, user, "User registered successfully", 201);

    })(req, res);
};

export const login = (req, res) => {
    res.send("Login route");
};