const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../core/database");

const Item = sequelize.define("Item", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Item;
