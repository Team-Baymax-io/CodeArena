import ConnectDB from "./config/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

dotenv.config({
  path: "./env",
});

ConnectDB()
  .then(() => {
    //initialization
    app.listen(PORT, () => {
      console.log("App is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection error !!!", err);
  });
