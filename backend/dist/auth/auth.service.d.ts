import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly hashService;
    constructor(usersService: UsersService, jwtService: JwtService, hashService: HashService);
    auth(user: User): Promise<any>;
    validatePassword(username: string, password: string): Promise<any>;
}
