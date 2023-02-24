const router = require("express").Router();
const { Blog } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const withAuth = require("../utils/helpers");

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

router.get("/signup", (req, res) => {
  try {
    res.render("signup", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

router.get("/goodbye", (req, res) => {
  try {
    res.render("goodbye", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

// router.get("/blogging", (req, res) => {
//   try {
//     res.render("blogging", { layout: "main" });
//   } catch (err) {
//     console.log(err);
//     res.status(404);
//   }
// });

router.get("/blogging/:id", async (req, res) => {
  try {
    const blogDeets = await Blog.findByPk(req.params.id);
    const blog = blogDeets.get({ plain: true });
    res.render("blogging", { layout: "main", blog: blog });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});
//rendering createPost handlebars page
router.get("/create", (req, res) => {
  try {
    res.render("createPost", { layout: "main" });
  } catch (err) {
    console.log(err);
    res.status(404).json(error);
  }
});

router.post('/dashboard', async (req, res) => {
  try { 
    const postData = await Blog.create({
    title: req.body.title,
    post: req.body.post,
    
  });
  res.status(200).json(postData)}
  catch(err){
    res.status(400).json(err)
 } });



// router.post("/dashboard", async (req, res) => {
//   try {
//     const title = req.body.fname;
//     const post = req.body.opentext;

//     // 4. Retrieve the data from the form submission

//     // 5. Save the data to your database
//     const Blogs = await Blog.create({ title, post });

//     // 6. Retrieve data from database and pass it to Handlebars template
//     const posts = await Blogs.findAll();

//     res.render("dashboard", { posts });
//   } catch (err) {
//     res.status(404).json(error);
//   }
// });

module.exports = router;
