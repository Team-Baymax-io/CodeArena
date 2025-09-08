import express from "express";
import { getAyurvedicTips } from "../controllers/tips.controllers.js";

const tipsRouter = express.Router();

// Get Ayurvedic tips for a specific user
tipsRouter.get("/:id", getAyurvedicTips);

export default tipsRouter;
