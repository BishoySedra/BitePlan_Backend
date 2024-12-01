import { wrapper } from "../utils/wrapper.js";
import * as authService from "../services/auth.js";
import { sendResponse } from "../utils/response.js";

export const register = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the username, email and password from the request body
        const { username, email, password, confirmPassword } = req.body;

        // create a new user
        await authService.register({ username, email, password, confirmPassword });

        // send the response
        sendResponse(res, null, "User registered successfully", 201);

    })(req, res, next);
};

export const login = (req, res, next) => {
    wrapper(async (req, res, next) => {
        // get the email and password from the request body
        const { email, password } = req.body;

        // login the user
        const token = await authService.login({ email, password });

        // send the response
        sendResponse(res, { token }, "User logged in successfully", 200);

    })(req, res, next);
};
