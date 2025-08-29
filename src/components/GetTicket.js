import React, { useState } from 'react';

function GetTicket({ setResponse }) {
  const [id, setId] = useState('');

  const fetchTicket = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tickets/${id}`);
      if (!res.ok) throw new Error('Ticket não encontrado');
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
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
      <button onClick={fetchTicket}>Buscar Ticket</button>
    </div>
  );
}

export default GetTicket;
