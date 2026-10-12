import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", {
    title: "Om oss",
    heading: "Om projektet",
    text: "Projektet visar hur man delar upp kod i filer och kopplar ihop dem med moduler.",
  });
});

export default router;