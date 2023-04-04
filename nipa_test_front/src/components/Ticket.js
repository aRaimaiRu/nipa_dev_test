import { useState } from 'react';

const Ticket = ({ ticket, onUpdateTicket }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [contactInformation, setContactInformation] = useState(
    ticket.contact_information
  );
  const [status, setStatus] = useState(ticket.status_id);

  const handleSave = () => {
    onUpdateTicket(ticket.id, title, description, contactInformation, status);
    setIsEditing(false);
  };

  return (
    <div className="ticket">
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="form-row">
            <label htmlFor={`title-${ticket.id}`}>Title:</label>
            <input
              type="text"
              id={`title-${ticket.id}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor={`description-${ticket.id}`}>Description:</label>
            <textarea
              id={`description-${ticket.id}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`contact-information-${ticket.id}`}>
              Contact Information:
            </label>
            <input
              type="text"
              id={`contact-information-${ticket.id}`}
              value={contactInformation}
              onChange={(e) => setContactInformation(e.target.value)}
            />
          </div>

          <label htmlFor={`status-${ticket.id}`}>Status:</label>
          <select
            id={`status-${ticket.id}`}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={1}>Pending</option>
            <option value={2}>Accepted</option>
            <option value={3}>Resolved</option>
            <option value={4}>Rejected</option>
          </select>

          <div className="button-container">
            <button className='min-width4' type="submit">Save</button>
            <button className='min-width4' type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <p>
            <strong>Contact Information:</strong> {ticket.contact_information}
          </p>

          <div className="button-container">
            <button className='min-width4' onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Ticket;
