import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './entities/wish.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class WishesService {
    private readonly wishesRepository;
    constructor(wishesRepository: Repository<Wish>);
    createWish(createWishDto: CreateWishDto, user: User): Promise<Record<string, never>>;
    findAllWishes(): Promise<Wish[]>;
    findWishById(id: number): Promise<Wish>;
    findManyByIdWishes(idWishes: number[]): Promise<Wish[]>;
    getLastWishes(): Promise<Wish[]>;
    getTopWishes(): Promise<Wish[]>;
    updateWish(wishId: number, updateWishDto: UpdateWishDto, userId: number): Promise<Record<string, never>>;
    updateWishRaised(wishId: number, raised: number): Promise<Record<string, never>>;
    removeWishById(wishId: number, userId: number): Promise<Wish>;
    copyWish(wishId: number, user: User): Promise<Record<string, never>>;
}
