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

//protected routes
userRouter.route("/login").post(verifyJWT, loginUser);
userRouter.route("/get-user").get(verifyJWT, getCurrentUser);
userRouter.route("/change-pass").post(verifyJWT, changeCurrentPassword);

export default userRouter;
