-- Script para configurar o banco de dados CRUD
-- Execute este script no SQL Server Management Studio ou Azure Data Studio

-- Criar o banco de dados
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'crud_database')
BEGIN
    CREATE DATABASE crud_database;
END
GO

-- Usar o banco de dados
USE crud_database;
GO

-- Criar a tabela de usuários
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
BEGIN
    CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(100) NOT NULL,
        email NVARCHAR(100) NOT NULL,
        age INT NOT NULL
    );
END
GO

PRINT 'Banco de dados configurado com sucesso!';
