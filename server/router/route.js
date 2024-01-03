import { Router } from "express";
const router = Router();

// import controller
import * as controller from "../controllers/controller.js";

// Questions Routes API

//router.get("/questions", controller.getQuestions);
//router.post("/questions", controller.insertQuestions);

router
  .route("/questions")
  .get(controller.getQuestions) // GET request
  .post(controller.insertQuestions) // POST request
  .delete(controller.dropQuestions); // DELETE request

export default router;
