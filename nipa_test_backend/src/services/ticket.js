const db = require("../loaders/db")
const sequelize =require("sequelize")
module.exports = {
    create,
    getall,
    update
  };
async function create(params) {
  let ticket = await db.Ticket.create({...params, status_id:1})
  //   db.Ticket.create({
  //   title: 'Example Ticket',
  //   contact_information: 'John Doe',
  //   // created: new Date(),
  //   // updated: new Date(),
  //   status_id: 1,
  // })
    // .then((ticket) => console.log(ticket.toJSON()))
    // .catch((error) => console.error(error));
    return ticket.toJSON()
}

async function getall() {
    return await db.Ticket.findAll({
      order: [
        ['status_id', 'DESC'],
        ['updatedAt', 'DESC'],
    ],
    });
  }
async function update(id, params) {
    let ticket = await db.Ticket.findOne({where: {id} });
    Object.assign(ticket, params);
    await ticket.save()
    return ticket.toJSON()
}