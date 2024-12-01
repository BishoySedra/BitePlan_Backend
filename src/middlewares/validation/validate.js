import { sendResponse } from "../../utils/response.js";

function validate(schema, isBody = true) {
    return async function (req, res, next) {
        try {
            let validatedResult;
            if (isBody)
                validatedResult = await schema.validateAsync(req.body, {
                    abortEarly: false,
                });
            else {
                validatedResult = await schema.validateAsync(req.params, {
                    abortEarly: false,
                });
            }
            next();
        } catch (error) {
            return sendResponse(res,
                error.details.map((detail) => ({
                    message: detail.message,
                    field: detail.path.join("."),
                })),
                "Validation Error",
                400);
        }
    };
}

export default validate;