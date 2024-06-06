import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Wish } from '../wishes/entities/wish.entity';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HashService } from '../hash/hash.service';
export declare class UsersService {
    private readonly usersRepository;
    private readonly wishesRepository;
    private readonly hashService;
    constructor(usersRepository: Repository<User>, wishesRepository: Repository<Wish>, hashService: HashService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    findUserById(id: number): Promise<User>;
    updateUserById(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    findUserWishes(id: number): Promise<Wish[]>;
    findMany(query: string): Promise<User[]>;
}
