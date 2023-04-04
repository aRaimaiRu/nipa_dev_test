import Ticket from "./Ticket";
import { useState } from 'react';
import TicketForm from './TicketForm';

const TicketColumn = ({ status, tickets, updateTicketStatus, updateTicket, createTicket }) => {
  const [showForm, setShowForm] = useState(false);

  const handleUpdateTicketStatus = (ticketId, newStatus) => {
    updateTicketStatus(ticketId, newStatus);
  };

  const handleUpdateTicket = (ticketId, title, description, contactInformation, status_id) => {
    updateTicket(ticketId, title, description, contactInformation, status_id);
  };

  const handleCreateTicket = (title, description, contactInformation) => {
    createTicket(title, description, contactInformation);
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="ticket-column">
      <h2>{status}</h2>
      {createTicket && <button onClick={handleShowForm}>Create Ticket</button>}
      {showForm && <TicketForm onSubmit={handleCreateTicket} onCancel={handleHideForm} />}
      {tickets.map(ticket => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          onUpdateTicketStatus={handleUpdateTicketStatus}
          onUpdateTicket={handleUpdateTicket}
        />
      ))}
    </div>
  );
};

export default TicketColumn;