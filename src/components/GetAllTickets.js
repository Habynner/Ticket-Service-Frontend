

function GetAllTickets({ setResponse }) {

  const fetchTicket = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tickets`);
      if (!res.ok) throw new Error('Ticket não encontrado');
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div>

      <button onClick={fetchTicket}>Buscar Tickets</button>
    </div>
  );
}

export default GetAllTickets;
