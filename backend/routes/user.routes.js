import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  registerUser,
  loginUser,
  getUser,
  changeCurrentPassword,
} from "../controllers/user.controllers.js";

const userRouter = Router();

//unprotected routes
userRouter.route("/register").post(registerUser);

//protected routes
userRouter.route("/login").post(verifyJWT, loginUser);
userRouter.route("/get-user").get(verifyJWT, getUser);
userRouter.route("/change-pass").post(verifyJWT, changeCurrentPassword);

export default userRouter;
