import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Wish } from '../wishes/entities/wish.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getCurrentUser(req: any): Promise<User>;
    updateCurrentUserById(req: any, updateUserDto: UpdateUserDto): Promise<User>;
    findCurrentUserWishes(req: any): Promise<Wish[]>;
    getUserData(username: string): Promise<User>;
    getUserWishes(username: string): Promise<Wish[]>;
    findUsersByQuery(query: string): Promise<User[]>;
}
