import { Router } from "express";
import authorize from "../middlewares/authorization/authorize.js"
import * as mealPlanController from "../controllers/mealPlan.js";

const router = Router();

// authorize the user
router.use(authorize);

// route to create a new meal plan  
router.post("/", mealPlanController.createMealPlan);

// route to get all meal plan  s of logged in user
router.get("/", mealPlanController.getAllMealPlans);

// route to update a meal plan  
router.patch("/:id", mealPlanController.updateMealPlan);

// route to delete a meal plan  
router.delete("/:id", mealPlanController.deleteMealPlan);

export default router;