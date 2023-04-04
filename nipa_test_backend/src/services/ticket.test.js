const TicketServices = require("./ticket")

const mockModel = {
  Ticket: {
    findAll: jest.fn(),
    create: jest.fn(),
    findOne: jest.fn()
  }
};

describe('TicketServices', () => {
  let ticketServices;

  beforeAll(() => {
    ticketServices = new TicketServices(mockModel);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Getall', () => {
    it('should call model.Ticket.findAll() once', async () => {
      mockModel.Ticket.findAll.mockResolvedValue([]);

      const result = await ticketServices.Getall();

      expect(mockModel.Ticket.findAll).toHaveBeenCalledTimes(1);

      expect(result).toEqual([]);
    });
  });

  describe('Create', () => {
    it('should call model.Ticket.create() once with the correct parameters', async () => {
      const params = {
        title: 'Test Ticket',
        description: 'This is a test ticket',
        user_id: 1,
      };
      const mockTicket = {
        ...params,
        status_id: 1,
        toJSON: jest.fn().mockReturnValueOnce(params),
      };
      mockModel.Ticket.create.mockResolvedValue(mockTicket);

      const ticket = await ticketServices.Create(params);

      expect(mockModel.Ticket.create).toHaveBeenCalledTimes(1);
      expect(mockModel.Ticket.create).toHaveBeenCalledWith({...params, status_id: 1});

      expect(mockTicket.toJSON).toHaveBeenCalledTimes(1);
      expect(ticket).toEqual(params);
    });
  });

  describe('Update', () => {
    it('should call model.Ticket.findOne() once with the correct ID', async () => {
      const id = 1;
      const params = {
        title: 'Updated Test Ticket',
        description: 'This is an updated test ticket',
        save:jest.fn().mockReturnValueOnce([]),
        toJSON:jest.fn().mockReturnValueOnce({title: 'Updated Test Ticket', description: 'This is an updated test ticket'})
      };
      mockModel.Ticket.findOne.mockReturnValueOnce({})
      const findOneSpy = jest.spyOn(mockModel.Ticket, 'findOne');

      const ticketService = new TicketServices(mockModel);
      await ticketService.Update(id, params);

      expect(findOneSpy).toHaveBeenCalledTimes(1);
      expect(findOneSpy).toHaveBeenCalledWith({where: {id}});

    });
  });
});

