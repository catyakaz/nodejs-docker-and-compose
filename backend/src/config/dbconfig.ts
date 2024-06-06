import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';

export const createPostgresConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST') || 'localhost',
    port: configService.get('POSTGRES_PORT') || 5432,
    username: configService.get('POSTGRES_USERNAME') || 'student',
    password: configService.get('POSTGRES_PASSWORD') || 'student',
    database: configService.get('POSTGRES_DB') || 'kupipodariday',
    entities: [User, Wish, Offer, Wishlist],
    synchronize: configService.get('POSTGRES_SYNCHRONIZE') || true,
  };
};
