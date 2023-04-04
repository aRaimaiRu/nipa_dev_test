const { DataTypes } = require('sequelize');

function model(sequelize) {
  const attributes = {
    status_name: { type: DataTypes.STRING, allowNull: false },
  };

  return sequelize.define('statuses', attributes);
}
module.exports = model;
