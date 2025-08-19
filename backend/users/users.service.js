"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    async findAll() {
        return this.users;
    }
    async findOne(id) {
        return this.users.find(user => user.id === id);
    }
    async create(userData) {
        const newUser = {
            id: this.users.length + 1,
            ...userData
        };
        this.users.push(newUser);
        return { message: 'Usuário criado!' };
    }
    async update(id, userData) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            this.users[userIndex] = { ...this.users[userIndex], ...userData };
            return { message: 'Usuário atualizado!' };
        }
        return { message: 'Usuário não encontrado!' };
    }
    async remove(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            this.users.splice(userIndex, 1);
            return { message: 'Usuário deletado!' };
        }
        return { message: 'Usuário não encontrado!' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map