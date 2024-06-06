import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { User } from '../users/entities/user.entity';
import { Wish } from './entities/wish.entity';
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    createWish({ user }: {
        user: User;
    }, dto: CreateWishDto): Promise<Record<string, never>>;
    findAllWishes(): Promise<Wish[]>;
    findLastWishes(): Promise<Wish[]>;
    findTopWishes(): Promise<Wish[]>;
    findWishById(id: string): Promise<Wish>;
    updateWish({ user }: {
        user: User;
    }, id: string, dto: UpdateWishDto): Promise<Record<string, never>>;
    deleteWish({ user }: {
        user: User;
    }, id: string): Promise<Wish>;
    copyWish({ user }: {
        user: User;
    }, id: string): Promise<Record<string, never>>;
}
