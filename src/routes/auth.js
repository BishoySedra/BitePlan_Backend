import { Router } from "express";
import * as authController from "../controllers/auth.js";

// importing schemas for each route
import * as authSchemas from "../middlewares/validation/schemas/auth.js";

// importing middleware for each route
import validate from "../middlewares/validation/validate.js";

const router = Router();

// route to register a user
router.post("/register", validate(authSchemas.signUpSchema), authController.register);

// route to login a user
router.post("/login", authController.login);

export default router;