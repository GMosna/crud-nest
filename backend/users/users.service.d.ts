export declare class UsersService {
    private users;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
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
