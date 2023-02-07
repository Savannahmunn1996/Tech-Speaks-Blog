// const user = require("express").Router();
// const { User } = require("../../models");
// //create user
// //this code can be used in most situations
// user.post("/", async (req, res) => {
//   try {
//     const userDeets = await User.create({
//       username: req.params.username,
//       password: req.params.password,
//     });
//     const currentUser = userDeets.get({ plain: true });
//     req.session.save(() => {
//       req.session.loggedIn = true;
//       req.session.username = currentUser.username;
//       req.session.userId = currentUser.id;
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = user;
