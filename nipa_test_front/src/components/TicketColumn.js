import Ticket from './Ticket';
import { useState } from 'react';
import TicketForm from './TicketForm';
import { FaPlusCircle } from 'react-icons/fa';

const TicketColumn = ({
  status,
  tickets,
  updateTicketStatus,
  updateTicket,
  createTicket,
  order
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleUpdateTicketStatus = (ticketId, newStatus) => {
    updateTicketStatus(ticketId, newStatus);
  };

  const handleUpdateTicket = (
    ticketId,
    title,
    description,
    contactInformation,
    status_id
  ) => {
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
    <div className={'ticket-column ticket-column'+order} >
      <h2 className='color-white' style={{display:"flex",justifyContent:"space-between"}}>
        {status}{' '}
        {createTicket && (
          <button className="icon-button" onClick={handleShowForm}><FaPlusCircle /></button>
        )}
      </h2>
      {showForm && (
        <TicketForm onSubmit={handleCreateTicket} onCancel={handleHideForm} />
      )}
      {tickets.map((ticket) => (
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
