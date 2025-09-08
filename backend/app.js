import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//import router
import userRouter from "./routes/user.routes.js";
// import chatRouter from "./routes/chat.routes.js";
// import formRoutes from "./routes/form.routes.js";
import trackingsRouter from "./routes/tracking.routes.js";
import tipsRouter from "./routes/tips.routes.js";

//user routes
app.use("/api/user", userRouter);
// app.use("/api/v2", chatRouter);
// app.use("/api/form", formRoutes);
app.use("/api/tracking", trackingsRouter);
app.use("/api/tips", tipsRouter);

export { app };
