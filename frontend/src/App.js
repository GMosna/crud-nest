import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    buscarUsuarios();
  }, []);

  function buscarUsuarios() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log('Erro:', error));
  }

  function adicionarUsuario() {
    const novoUsuario = { name, email, age: parseInt(age) };

    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoUsuario)
    })
    .then(() => {
      alert('Usuário adicionado!');
      setName(''); setEmail(''); setAge('');
      buscarUsuarios();
    })
    .catch(error => console.log('Erro:', error));
  }

  function deletarUsuario(id) {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
    .then(() => {
      alert('Usuário deletado!');
      buscarUsuarios();
    })
    .catch(error => console.log('Erro:', error));
  }

  return (
    <div className="container">
      <h1>Sistema de Usuários</h1>
      
      <div className="form-section">
        <h2>Adicionar Usuário</h2>
        
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button onClick={adicionarUsuario}>Adicionar</button>
        <button onClick={() => { setName(''); setEmail(''); setAge(''); }}>Limpar</button>
      </div>

      <div className="users-section">
        <h2>Lista de Usuários</h2>
        
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.age} anos</p>
            <button onClick={() => deletarUsuario(user.id)}>Deletar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
