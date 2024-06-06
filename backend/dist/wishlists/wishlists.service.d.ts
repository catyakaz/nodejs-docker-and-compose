import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { WishesService } from '../wishes/wishes.service';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class WishlistsService {
    private readonly wishlistsRepository;
    private readonly wishesService;
    constructor(wishlistsRepository: Repository<Wishlist>, wishesService: WishesService);
    createWishlist(createWishlistDto: CreateWishlistDto, user: User): Promise<Wishlist>;
    findAllWishlists(): Promise<Wishlist[]>;
    findWishlistById(id: number): Promise<Wishlist>;
    updateWishlist(id: number, updateWishlistDto: UpdateWishlistDto, userId: number): Promise<Wishlist>;
    deleteWishlistById(id: number, userId: number): Promise<Wishlist>;
}
