import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Startsida",
    heading: "Välkommen till min sida!",
  });
});

export default router;