const { DataTypes } = require('sequelize');

function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    contact_information: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    status_id: { type: DataTypes.INTEGER, allowNull: false },
  };

  return sequelize.define('ticket', attributes);
}
module.exports = model;
