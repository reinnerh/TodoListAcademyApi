const Sequelize = require("sequelize");
const { setup } = require("./setup");
const db = {};

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@todo_list_db:5432/${process.env.DB_NAME}`
);

setup(sequelize, db);

module.exports = { db, sequelize };
