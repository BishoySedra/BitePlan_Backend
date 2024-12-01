import { verifyAccessToken } from "../utils/jwt.js";
import { createCustomError } from "./errors/customError.js";
import { sendResponse } from "../utils/response.js";
import { wrapper } from "../utils/wrapper.js";

const authorize = async (req, res, next) => {
    wrapper(async (req, res, next) => {

        // check if the authorization header is present
        if (req.headers.authorization === undefined || req.headers.authorization === null) {
            throw new createCustomError("Unauthorized Access!", 401, null);
        }

        //check if the authorization header is in the correct format
        const bearerPart = req.headers.authorization.split(" ")[0];
        if (bearerPart !== "Bearer") {
            throw new createCustomError("Unauthorized Token!!", 400, null);
        }

        // verify the token
        let token = req.headers.authorization.split(" ")[1];
        let tokenData;
        try {
            tokenData = verifyAccessToken(token);
        } catch (err) {
            return sendResponse(res, null, "Error while verifying token!", 400);
        }

        // console.log("tokenData", tokenData);

        // attach the token data to the request object
        const { id } = tokenData;
        req.userId = id;

        // console.log("req.user", req.user);

        // call the next middleware
        next();
    })(req, res, next);
};

export default authorize;