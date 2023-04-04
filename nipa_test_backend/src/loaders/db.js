// const mysql = require('mariadb');
// const { Sequelize } = require('sequelize');
// const Ticket = require("../models/Tickets");

// const username = process.env.USER;
// const password = process.env.MYSQL_ROOT_PASSWORD;
// const database = process.env.MYSQL_DATABASE;
// initialize();
// module.exports = db = {};
// async function initialize() {
//     console.log(database, username, password)
//     const sequelize = await new Sequelize(database, username, password, {
//         host: "mysql",
//         dialect: 'mariadb',
//       });
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');
//     db.Ticket = Ticket(sequelize);
//     await sequelize.sync({ force: false });
// }
const mysql = require('mariadb');
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
