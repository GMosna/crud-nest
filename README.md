# CRUD Simples - NestJS + React

Um projeto básico de CRUD usando NestJS no backend e React no frontend.

## Como usar

### Backend (NestJS)

1. Instale as dependências:
```bash
npm install
```

2. Configure o banco de dados SQL Server:
- Host: localhost
- Port: 1433
- Username: sa
- Password: YourPassword123
- Database: crud_database

3. Execute o servidor:
```bash
npm run start:dev
```

O servidor rodará na porta 3001.

### Frontend (React)

1. Entre na pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o frontend:
```bash
npm start
```

O frontend rodará na porta 3000.

## Funcionalidades

- ✅ Adicionar usuário
- ✅ Listar usuários
- ✅ Deletar usuário

## Endpoints da API

- `GET /users` - Listar todos os usuários
- `POST /users` - Criar novo usuário
- `DELETE /users/:id` - Deletar usuário

## Estrutura do Projeto

```
src/
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── user.entity.ts
│   └── dto/
│       ├── create-user.dto.ts
│       └── update-user.dto.ts
├── app.module.ts
└── main.ts

frontend/
├── src/
│   ├── App.js
│   └── App.css
└── package.json
```
