import React, { useState } from 'react';

function PostTicket({ setResponse }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTicket = async () => {
    try {
      const res = await fetch('http://localhost:8080/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: 'Erro ao criar ticket' });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={createTicket}>Criar Ticket</button>
    </div>
  );
}

export default PostTicket;
