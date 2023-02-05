const User = require("./User.js");
const Blog = require("./blogPost.js");

//I believe I need to connect each user to their blog post
// however I am not sure this is necessary
User.hasOne(Blog, {
  foreignKey: "User_id",

  onDelete: "CASCADE",
});

module.exports = { User, Blog };
