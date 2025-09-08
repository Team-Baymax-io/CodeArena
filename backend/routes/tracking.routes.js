import express from "express";
import {
  addTracking,
  getMyTracking,
  updateTracking,
  deleteTracking,
} from "../controllers/tracking.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const trackingsRouter = express.Router();

// Protected routes
trackingsRouter.post("/add", verifyJWT, addTracking);
trackingsRouter.get("/my", verifyJWT, getMyTracking);
trackingsRouter.put("/:id", verifyJWT, updateTracking);
trackingsRouter.delete("/:id", verifyJWT, deleteTracking);

export default trackingsRouter;
