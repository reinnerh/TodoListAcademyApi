const Sequelize = require("sequelize");
const { setup } = require("./setup");
const db = {};

const sequelize = new Sequelize("postgres://user:pass@todo_list_db:5432/db"); // Example for postgres

setup(sequelize, db);

module.exports = { db, sequelize };
