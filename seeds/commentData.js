const { Comment } = require("../models");

const cData = [
  {
    opinion: "This post Is really great!",
  },
  {
    opinion: "I think this is very important info.",
  },
];

const seedC = () => Comment.bulkCreate(cData);
module.exports = seedC;
