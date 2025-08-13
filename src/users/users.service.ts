import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'João', email: 'joao@email.com', age: 25 },
    { id: 2, name: 'Maria', email: 'maria@email.com', age: 30 }
  ];

  async findAll() {
    return this.users;
  }

  async findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  async create(userData: any) {
    const newUser = {
      id: this.users.length + 1,
      ...userData
    };
    this.users.push(newUser);
    return { message: 'Usuário criado!' };
  }

  async update(id: number, userData: any) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex >= 0) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      return { message: 'Usuário atualizado!' };
    }
    return { message: 'Usuário não encontrado!' };
  }

  async remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
      return { message: 'Usuário deletado!' };
    }
    return { message: 'Usuário não encontrado!' };
  }
}
