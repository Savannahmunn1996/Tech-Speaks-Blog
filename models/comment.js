const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    opinion: {
      type: DataTypes.STRING,
    },

    post: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Comment",
  }
);
module.exports = Comment;
