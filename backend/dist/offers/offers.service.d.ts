import { CreateOfferDto } from './dto/create-offer.dto';
import { Offer } from './entities/offer.entity';
import { Repository, DataSource } from 'typeorm';
import { WishesService } from '../wishes/wishes.service';
import { User } from '../users/entities/user.entity';
export declare class OffersService {
    private readonly offersRepository;
    private readonly wishesService;
    private readonly dataSource;
    constructor(offersRepository: Repository<Offer>, wishesService: WishesService, dataSource: DataSource);
    createOffer(createOfferDto: CreateOfferDto, user: User): Promise<{
        wish: import("../wishes/entities/wish.entity").Wish;
        user: User;
        amount: number;
        hidden: boolean;
        itemId: number;
    } & Offer>;
    findAllOffers(): Promise<Offer[]>;
    findOneOffer(id: number): Promise<Offer>;
}
