import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: any): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        age: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        age: number;
    }>;
    update(id: string, userData: any): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
