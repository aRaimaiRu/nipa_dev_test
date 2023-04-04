import { useState, useEffect } from 'react';
import TicketColumn from './TicketColumn';
import axios from 'axios';
const HOSTAPI = `${process.env.REACT_APP_HOSTAPI || ''}`;

const TicketBoard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get(`http://${HOSTAPI || 'localhost:3002'}/api/tickets`)
      .then(response => setTickets(response.data.data))
      .catch(error => console.error(error));
  }, []);


  const updateTicket = (ticketId, title, description, contactInformation, status_id) => {
    axios.put(`http://${HOSTAPI || 'localhost:3002'}/api/tickets/${ticketId}`, { title, description, contact_information: contactInformation, status_id: parseInt(status_id) })
      .then(response => {
        // Update ticket in state
        var updatedTicket = response.data.data;
        setTickets(prevTickets => {
          const index = prevTickets.findIndex(ticket => ticket.id === updatedTicket.id);
          return [
            updatedTicket,
            ...prevTickets.slice(0, index),
            ...prevTickets.slice(index + 1)
          ];
        });
      })
      .catch(error => console.error(error));
  };
  const createTicket = (title, description, contactInformation) => {
    axios.post(`http://${HOSTAPI || 'localhost:3002'}/api/tickets`, { title, description, contact_information: contactInformation })
      .then(response => {
        // Add new ticket to state
        const newTicket = response.data.data;
        setTickets(prevTickets => [newTicket, ...prevTickets]);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="ticket-board">
      {console.log("tickets", tickets)}
      <TicketColumn
        status="Pending"
        tickets={tickets.filter(ticket => ticket.status_id === 1)}
        updateTicket={updateTicket}
        createTicket={createTicket}
      />
      <TicketColumn
        status="Accepted"
        tickets={tickets.filter(ticket => ticket.status_id === 2)}
        updateTicket={updateTicket}
        createTicket={createTicket}
      />
      <TicketColumn
        status="Resolved"
        tickets={tickets.filter(ticket => ticket.status_id === 3)}
        updateTicket={updateTicket}
        createTicket={createTicket}
      />
      <TicketColumn
        status="Rejected"
        tickets={tickets.filter(ticket => ticket.status_id === 4)}
        updateTicket={updateTicket}
        createTicket={createTicket}
      />
    </div>
  );
};

export default TicketBoard;