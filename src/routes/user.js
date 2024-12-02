import { Router } from "express";
import * as userController from "../controllers/user.js";
import authorize from "../middlewares/authorization/authorize.js"

const router = Router();

// route to get user profile by id
router.get("/:id", userController.getUserById);

// route to get all posted recipes by a user
router.get("/:userId/recipes", userController.getUserRecipes);

router.use(authorize);

// route to get logged-in user profile
router.get("/profile", userController.getProfile);

// route to update logged-in user profile
router.patch("/profile", userController.updateProfile);

// route to follow a user
router.post("/:userId/follow", userController.followUser);

// route to unfollow a user
router.delete("/:userId/follow", userController.unfollowUser);

export default router;

