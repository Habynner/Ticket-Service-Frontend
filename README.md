# 🎟️ Ticket Management Frontend

Este é o **frontend** de um sistema de gerenciamento de tickets, desenvolvido em **React.js**. Ele consome a API do backend (**Spring Boot**) para criar, listar, buscar, atualizar e deletar tickets.

---

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para a interface.
- **JavaScript (ES6+)** - Linguagem base.
- **Fetch API** - Para chamadas HTTP ao backend.
- **CSS** - Estilização.
- **Vite** ou **Create React App** (dependendo da sua estrutura) - Ferramenta para build e desenvolvimento.

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/
│ ├── GetTicket.js # Busca ticket por ID
│ ├── TicketList.js # Lista todos os tickets
│ ├── CreateTicket.js # Cria um novo ticket
│ ├── UpdateTicket.js # Atualiza status do ticket
│ └── DeleteTicket.js # Remove ticket por ID
│
├── App.js # Componente principal
└── index.js # Ponto de entrada
```

## ⚙️ Pré-requisitos

- **Node.js** (versão LTS recomendada: 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

---

## ▶️ Como Rodar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ticket-frontend.git
   cd ticket-frontend
   ```

   ##Instalar dependências
   ```bash
   npm install
   ```

   ##Rodar em modo de desenvolvimento
   ```bash
   npm start
   ```

    ## O Projeto estará disponível em:
   
   [localhost:3000](http://localhost:3000)

   ## ✅ Funcionalidades
   
✔ Criar tickets

✔ Listar todos os tickets

✔ Buscar ticket por ID

✔ Atualizar status do ticket

✔ Excluir ticket

## O Projeto depende do backend para funcionar
   
   [Backend](https://github.com/Habynner/Ticket-Service-Backend)

   ## 👤 Autor

**Habynner Silva**  
Desenvolvedor Fullstack com expertise em .NET, NestJS, MongoDB, GCP e microsserviços.  

[LinkedIn](linkedin.com/in/habynner-silva-developer)
