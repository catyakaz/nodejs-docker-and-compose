import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    signin(req: Request & {
        user: User;
    }): Promise<any>;
}
