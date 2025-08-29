import React, { useState } from 'react';
import GetTicket from './components/GetTicket';
import PostTicket from './components/PostTicket';
import PutTicket from './components/PutTicket';
import DeleteTicket from './components/DeleteTicket';
import './App.css';
import GetAllTickets from './components/GetAllTickets';

function App() {
  const [tab, setTab] = useState('POST');
  const [response, setResponse] = useState(null);

  return (
    <div className="container">
      <h1>API Ticket - Teste</h1>

      {/* Tabs */}
      <div className="tabs">
        {['GET ALL', 'GET', 'POST', 'PUT', 'DELETE'].map((t) => (
          <button
            key={t}
            className={`tab-button ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {tab === 'GET ALL' && <GetAllTickets setResponse={setResponse} />}
        {tab === 'GET' && <GetTicket setResponse={setResponse} />}
        {tab === 'POST' && <PostTicket setResponse={setResponse} />}
        {tab === 'PUT' && <PutTicket setResponse={setResponse} />}
        {tab === 'DELETE' && <DeleteTicket setResponse={setResponse} />}
      </div>

      {/* Response */}
      <h2>Resposta da API:</h2>
      <pre>{response ? JSON.stringify(response, null, 2) : 'Nenhuma ação realizada ainda'}</pre>
    </div>
  );
}

export default App;
