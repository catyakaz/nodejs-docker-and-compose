import { User } from '../../users/entities/user.entity';
export declare class Wish {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    offers: [];
    copied: number;
}
