import { CustomError } from "./customError.js";
import { sendResponse } from "../../utils/response.js";

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        sendResponse(res, error.body, error.message, error.statusCode);
        return;
    }
    // console.log(error);
    sendResponse(res, null, "Internal Server Error", 500);
};

export default errorHandler;