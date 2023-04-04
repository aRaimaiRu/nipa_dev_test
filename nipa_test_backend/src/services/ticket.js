const db = require("../loaders/db")
const sequelize =require("sequelize");
const model = require("../models/Tickets");

class TicketServices{
  constructor(model){
    this.model = model

    this.Getall = async function () {

      return await this.model.Ticket.findAll({
        order: [
          ['status_id', 'DESC'],
          ['updatedAt', 'DESC'],
      ],
      });
    }

    this.Create = async function (params) {
      let ticket = await this.model.Ticket.create({...params, status_id:1})
        return ticket.toJSON()
    }

    this.Update = async function (id, params) {
      let ticket = await this.model.Ticket.findOne({where: {id} });
      Object.assign(ticket, params);
      await ticket.save()
      return ticket.toJSON()
  }
  }




 } 

 module.exports = TicketServices;

