import { Router } from "express";
import { AiChat } from "../controllers/chat.controllers.js";

const chatRouter = Router();

chatRouter.route("/chat").post(AiChat);

export default chatRouter;
