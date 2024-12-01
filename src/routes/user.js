import { Router } from "express";
import * as userController from "../controllers/user.js";
import authorize from "../middlewares/authorization/authorize.js"

const router = Router();

router.use(authorize);

// route to get logged-in user profile
router.get("/profile", userController.getProfile);

// route to update logged-in user profile
router.patch("/profile", userController.updateProfile);

export default router;

