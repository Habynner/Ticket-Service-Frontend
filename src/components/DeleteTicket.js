import React, { useState } from 'react';

function DeleteTicket({ setResponse }) {
  const [id, setId] = useState('');

  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tickets/${id}`, {
        method: 'DELETE'
      });
      setResponse({ status: res.status, message: 'Ticket deletado' });
    } catch (error) {
      setResponse({ error: 'Erro ao deletar ticket' });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ID do Ticket"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={deleteTicket}>Deletar Ticket</button>
    </div>
  );
}

export default DeleteTicket;
