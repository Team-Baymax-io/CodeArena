import ConnectDB from "./config/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    //initialization
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });

    //Home Route
    app.get("/", (req, res) => {
      res.send("Welcome to the API!");
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection error !!!", err);
  });
