import React, { useState } from 'react';

function PutTicket({ setResponse }) {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('OPEN');

  const updateTicket = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tickets/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: 'Erro ao atualizar ticket' });
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
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="OPEN">OPEN</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="CLOSED">CLOSED</option>
      </select>
      <button onClick={updateTicket}>Atualizar Status</button>
    </div>
  );
}

export default PutTicket;
