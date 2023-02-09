const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: { title: "Sequelize Basics" },
    });
    const blog = blogData.get({ plain: true });
    res.render("home", { layout: "main", blog: blog });
  } catch (err) {
    console.log(err);
    res.status(404).json(error);
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

router.get("/login", (req, res) => {
  try {
    res.render("login", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404).json(error);
  }
});

router.get("/signup", (req,res)=>{
    try{
        res.render("signup", {layout:"main"});
    } catch(err){
        console.log(err);
        res.status(404);
    }
})

router.get("/goodbye", (req, res) => {
  try {
    res.render("goodbye", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

module.exports = router;
