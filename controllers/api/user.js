const user = require("express").Router();
const router = require(".");
const { User } = require("../../models");
//create user
//this code can be used in most situations
user.post("/", async (req, res) => {
  try {
    const userDeets = await User.create({
      username: req.params.username,
      password: req.params.password,
    });
    const currentUser = userDeets.get({ plain: true });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = currentUser.username;
      req.session.userId = currentUser.id;
    });
    res.render("home", { layout: "main", isLoggedIn: req.session.loggedIn });
    console.log(req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//A login for User
user.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = currentUser.username;
      req.session.userId = currentUser.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
    console.log(req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





user.post("/goodbye", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});





module.exports = user;
