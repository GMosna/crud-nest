export declare class UsersService {
    private users;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        age: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        age: number;
    }>;
    create(userData: any): Promise<{
        message: string;
    }>;
    update(id: number, userData: any): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
