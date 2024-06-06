"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostgresConfig = void 0;
const offer_entity_1 = require("../offers/entities/offer.entity");
const user_entity_1 = require("../users/entities/user.entity");
const wish_entity_1 = require("../wishes/entities/wish.entity");
const wishlist_entity_1 = require("../wishlists/entities/wishlist.entity");
const createPostgresConfig = (configService) => {
    return {
        type: 'postgres',
        host: configService.get('POSTGRES_HOST') || 'localhost',
        port: configService.get('POSTGRES_PORT') || 5432,
        username: configService.get('POSTGRES_USERNAME') || 'student',
        password: configService.get('POSTGRES_PASSWORD') || 'student',
        database: configService.get('POSTGRES_DB') || 'kupipodariday',
        entities: [user_entity_1.User, wish_entity_1.Wish, offer_entity_1.Offer, wishlist_entity_1.Wishlist],
        synchronize: configService.get('POSTGRES_SYNCHRONIZE') || true,
    };
};
exports.createPostgresConfig = createPostgresConfig;
//# sourceMappingURL=dbconfig.js.map