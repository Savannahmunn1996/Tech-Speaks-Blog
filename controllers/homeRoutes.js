const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", (req, res) => {
  try {
    res.render("home", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const blogsData = await Blog.findAll();
    const blogs = blogsData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("dashboard", { layout: "main", blogs: blogs });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

router.get("/goodbye", (req, res) => {
  res.render("goodbye", { layout: "main" });
});

module.exports = router;
