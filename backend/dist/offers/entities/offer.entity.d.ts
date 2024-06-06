import { Wish } from '../../wishes/entities/wish.entity';
import { User } from '../../users/entities/user.entity';
export declare class Offer {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    item: Wish;
    amount: number;
    hidden: boolean;
}
