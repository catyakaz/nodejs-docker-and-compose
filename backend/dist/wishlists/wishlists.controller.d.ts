import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { User } from '../users/entities/user.entity';
import { Wishlist } from './entities/wishlist.entity';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    getWishlists(): Promise<Wishlist[]>;
    createWishlist({ user }: {
        user: User;
    }, createWishlistDto: CreateWishlistDto): Promise<Wishlist>;
    getWishlistById(wishId: number): Promise<Wishlist>;
    updateWishlist({ user }: {
        user: User;
    }, wishId: string, dto: UpdateWishlistDto): Promise<Wishlist>;
    deleteWishlist({ user }: {
        user: User;
    }, id: number): Promise<Wishlist>;
}
