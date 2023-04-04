import { useState } from 'react';

const TicketForm = ({ ticket, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(ticket ? ticket.title : '');
  const [description, setDescription] = useState(ticket ? ticket.description : '');
  const [contactInformation, setContactInformation] = useState(ticket ? ticket.contact_information : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title, description, contactInformation);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} required />

      <label htmlFor="contact-information">Contact Information:</label>
      <input type="text" id="contact-information" value={contactInformation} onChange={(event) => setContactInformation(event.target.value)} required />

      <div className="button-container">
        <button type="submit">{ticket ? 'Update Ticket' : 'Create Ticket'}</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default TicketForm;