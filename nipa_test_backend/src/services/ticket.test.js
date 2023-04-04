const TicketServices = require("./ticket")

// create a mock model object for testing
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
    // create a new instance of TicketServices for each test
    ticketServices = new TicketServices(mockModel);
  });

  afterEach(() => {
    // clear any mock function calls after each test
    jest.clearAllMocks();
  });

  describe('Getall', () => {
    it('should call model.Ticket.findAll() once', async () => {
      // mock the return value of findAll
      mockModel.Ticket.findAll.mockResolvedValue([]);

      // call Getall
      const result = await ticketServices.Getall();

      // check that the mock function was called once
      expect(mockModel.Ticket.findAll).toHaveBeenCalledTimes(1);

      // check that the result is an empty array
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

// var db = {}
// var ticket = {}
// ticket.findAll = async ({ order }) =>{
//     if (order[0][0] == 'status_id' && order[0][1] == 'DESC'){
//         return await [1]
//     }else {
//         return await undefined
//     }
// }
// ticket.create = (params)=>{
//     return {}
// }
// ticket.findOne = (params)=>{
//     return {}
// }  
// db.Ticket = ticket
// const ticketServices = new TicketServices(db)

// test('ticketServices call db with order status_id DESC', () => {
//     expect(ticketServices.Getall()).toBe([]);
//   });
