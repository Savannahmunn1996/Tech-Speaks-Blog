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
const seeduser = () => User.bulkCreate(userData);
module.exports = seeduser;
