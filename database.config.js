// Configuração do banco de dados
// Ajuste estas configurações conforme seu SQL Server

module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'Guilherme.2005', // Senha correta do SQL Server
  database: 'crud_database',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
