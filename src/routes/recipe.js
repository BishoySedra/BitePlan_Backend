import { Router } from "express";
import * as recipeController from "../controllers/recipe.js"
import authorize from "../middlewares/authorization/authorize.js"

const router = Router();

// route to get all recipes
router.get("/", recipeController.getAllRecipes);

// route to get a recipe by id
router.get("/:id", recipeController.getRecipeById);

// authorize the user
router.use(authorize);

// route to post a new recipe
router.post("/", recipeController.createRecipe);

// route to update a recipe
router.patch("/:id", recipeController.updateRecipe);

// route to delete a recipe
router.delete("/:id", recipeController.deleteRecipe);

export default router;