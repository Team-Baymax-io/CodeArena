import { Router } from "express";

const formRoutes = Router();

formRoutes.route("/form").post((req, res) => {
  res.send("Form route");
});

export default formRoutes;
