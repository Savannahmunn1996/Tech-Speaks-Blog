const router = require("express").Router();
const { Blog } = require("../models");



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

module.exports = router;
