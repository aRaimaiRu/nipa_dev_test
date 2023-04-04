

class TicketServices{
  constructor(model){

    this.Getall = async function () {
      console.log(model)
      return await model.Ticket.findAll({
        order: [
          ['status_id', 'DESC'],
          ['updatedAt', 'DESC'],
      ],
      });
    }

    this.Create = async function (params) {
      let ticket = await model.Ticket.create({...params, status_id:1})
        return ticket.toJSON()
    }

    this.Update = async function (id, params) {
      let ticket = await model.Ticket.findOne({where: {id} });
      Object.assign(ticket, params);
      await ticket.save()
      return ticket.toJSON()
  }
  }




 } 

 module.exports = TicketServices;

