const router = require("express").Router();
const { Blog } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
// router.get("/blog/:id", async (req, res) => {
//   try {
//     const blogDeets = Blog.findByPk(req.params.id);
//     const blog = blogDeets.get({ plain: true });
//     res.render("blog", { layout: "main", blog: blog });
//   } catch (err) {
//     console.log(err);
//     res.status(404);
//   }
// });

// router.post("/savepost", async (req, res) => {
//   const postBody = req.body;
//   const newPost = postBody.map((postElement) => {
//     let postObj = {
//       title: postElement.title,
//       post: postElement.post,
//     };
//     return postObj;
//   });
//   try {
//     const posted = await Blog.create(newPost);
//     res.render("dashboard", { layout: "main", newPost: newPost });
//     res.status(200).json({ message: "post saved" });
//   } catch (err) {
//     res.json(err).status(500);
//   }
// });

module.exports = router;
