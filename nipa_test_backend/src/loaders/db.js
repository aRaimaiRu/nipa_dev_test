const { Sequelize } = require('sequelize');
const Ticket = require('../models/Tickets');
const Status = require("../models/Statuses");

const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DB;
module.exports = db = {};

initialize();
async function initialize() {
  const sequelize = new Sequelize(
    'postgres://' + username + ':' + password + '@postgres:5432/' + database
  ); // Example for postgres
  db.Ticket = Ticket(sequelize);
  db.Status = Status(sequelize);
  await sequelize.sync()
}
