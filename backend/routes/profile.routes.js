// routes/profile.routes.js
import express from "express";
import {
  getProfile,
  updateProfile,
  updateEnvironment,
  deleteProfile,
} from "../controllers/profile.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js"; // <-- JWT auth middleware

const profileRouter = express.Router();

// @route   GET /api/profile/me
// @desc    Get logged-in user's profile
// @access  Private
profileRouter.route("/me").get(verifyJWT, getProfile);

// @route   PUT /api/profile/update
// @desc    Update user profile
// @access  Private
profileRouter.route("/update").put(verifyJWT, updateProfile);

// @route   PUT /api/profile/environment
// @desc    Update environment info
// @access  Private
profileRouter.route("/environment").put(verifyJWT, updateEnvironment);

// @route   DELETE /api/profile/delete
// @desc    Delete profile
// @access  Private
profileRouter.route("/delete").delete(verifyJWT, deleteProfile);

export default profileRouter;
