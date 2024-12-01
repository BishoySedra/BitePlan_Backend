import { Router } from "express";
import * as authController from "../controllers/auth.js";

const router = Router();

// route to register a user
router.post("/register", authController.register);

// route to login a user
router.post("/login", authController.login);

export default router;

