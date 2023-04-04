const TicketHandler = require('./tickets');
const mockTicketService = {
  Getall: jest.fn(),
  Create: jest.fn(),
  Update: jest.fn(),
};

const ticketHandler = new TicketHandler(mockTicketService);

describe('TicketHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GetAllTickets', () => {
    it('should call ticketService.Getall() once and return a JSON response with a 200 status code', async () => {
      const mockTickets = [{ id: 1, title: 'Test Ticket', description: 'This is a test ticket', user_id: 1 }];
      mockTicketService.Getall.mockResolvedValue(mockTickets);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await ticketHandler.GetAllTickets(req, res, next);

      expect(mockTicketService.Getall).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Successful GetTickets', data: mockTickets });

      expect(next).not.toHaveBeenCalled();
    });

    it('should call next with an error if ticketService.Getall() throws an error', async () => {
      const mockError = new Error('Test Error');
      mockTicketService.Getall.mockRejectedValue(mockError);

      const req = {};
      const res = {};
      const next = jest.fn();

      await ticketHandler.GetAllTickets(req, res, next);

      expect(next).toHaveBeenCalledWith(mockError);

      expect(mockTicketService.Create).not.toHaveBeenCalled();
      expect(mockTicketService.Update).not.toHaveBeenCalled();
    });
  });
})