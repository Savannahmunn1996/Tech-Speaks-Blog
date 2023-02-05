const { User } = require("../models");

const userData = [
  {
    username: "savannah",
    password: "monkey",
  },
  {
    username: "julia",
    password: "duck",
  },
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
