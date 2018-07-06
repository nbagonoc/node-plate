const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index/home");
});
router.get("/about", (req, res) => {
  res.render("index/about");
});
router.get("/services", (req, res) => {
  res.render("index/services");
});

module.exports = router;
