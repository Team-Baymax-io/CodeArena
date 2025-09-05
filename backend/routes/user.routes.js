import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  changeCurrentPassword,
} from "../controllers/user.contollers.js";

const userRouter = Router();

//unprotected routes
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

//protected routes
userRouter.route("/get-user").get(verifyJWT, getCurrentUser);
userRouter.route("/change-pass").post(verifyJWT, changeCurrentPassword);

export default userRouter;
