const User = require("./User.js");
const Blog = require("./blogPost.js");
const Comment = require("./comment.js");
//I believe I need to connect each user to their blog post
// however I am not sure this is necessary
User.hasMany(Blog, {
  foreignKey: "User_id",

  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "Blog_id",

  onDelete: "CASCADE",
});

module.exports = { User, Blog, Comment };
