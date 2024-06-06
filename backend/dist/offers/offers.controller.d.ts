import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { Offer } from './entities/offer.entity';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    createOffer(req: any, createOfferDto: CreateOfferDto): Promise<{
        wish: import("../wishes/entities/wish.entity").Wish;
        user: import("../users/entities/user.entity").User;
        amount: number;
        hidden: boolean;
        itemId: number;
    } & Offer>;
    findAllOffers(): Promise<Offer[]>;
    findOneOffer(id: string): Promise<Offer>;
}
