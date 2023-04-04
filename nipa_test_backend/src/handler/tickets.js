class TicketHandler {
  constructor(ticketService) {
    this.GetAllTickets = async function (req, res, next) {
      try {
        let tickets = await ticketService.Getall();
        res
          .status(200)
          .json({ message: 'Successful GetTickets', data: tickets });
      } catch (e) {
        next(e);
      }
    };
    this.CreateTickets = async function (req, res, next) {
      try {
        let ticket = await ticketService.Create({ ...req.body });
        res
          .status(200)
          .json({ message: 'Successful Createickets', data: ticket });
      } catch (e) {
        next(e);
      }
    };
    this.UpdateTickets = async function (req, res, next) {
      try {
        let ticket = await ticketService.Update(req.params.id, { ...req.body });
        res
          .status(200)
          .json({ message: 'Successful UpdateTickets', data: ticket });
      } catch (e) {
        next(e);
      }
    };
  }
}

module.exports = TicketHandler;
