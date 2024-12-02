import { Router } from "express";
import * as savedRecipeController from "../controllers/savedRecipe.js";
import authorize from "../middlewares/authorization/authorize.js"

const router = Router();

// authorize the user
router.use(authorize);

// route to save a recipe
router.post("/:id", savedRecipeController.saveRecipe);

// route to get all saved recipes
router.get("/", savedRecipeController.getSavedRecipes);

// route to delete a saved recipe
router.delete("/:id", savedRecipeController.deleteSavedRecipe);

export default router;