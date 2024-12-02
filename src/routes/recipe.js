import { Router } from "express";
import * as recipeController from "../controllers/recipe.js"
import authorize from "../middlewares/authorization/authorize.js"

const router = Router();

router.use(authorize);

// route to post a new recipe
router.post("/", recipeController.createRecipe);

// route to update a recipe
router.patch("/:id", recipeController.updateRecipe);

// route to delete a recipe
router.delete("/:id", recipeController.deleteRecipe);

export default router;