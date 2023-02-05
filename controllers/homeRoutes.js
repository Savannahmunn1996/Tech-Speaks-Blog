const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { layout: "main" });
});
module.exports = router;
