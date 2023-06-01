const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const models = path.join(__dirname, "..", "models"); // correct it to path where your model files are

async function setup(sequelize, db) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    fs.readdirSync(models)
      .filter(function (file) {
        return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
      })
      .forEach(function (file) {
        // Sequelize version >= 6.x
        var model = require(path.join(models, file));
        console.log(model);
        db[model.name] = model;
      });

    Object.keys(db).forEach(function (modelName) {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    db.Sequelize = Sequelize; // for accessing static props and functions like Op.or
    db.sequelize = sequelize; // for accessing connection props and functions like 'query' or 'transaction'
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { setup };
