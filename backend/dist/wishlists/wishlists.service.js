"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishlist_entity_1 = require("./entities/wishlist.entity");
const wishes_service_1 = require("../wishes/wishes.service");
const typeorm_2 = require("typeorm");
const server_exception_1 = require("../exceptions/server.exception");
const error_codes_1 = require("../exceptions/error-codes");
let WishlistsService = class WishlistsService {
    constructor(wishlistsRepository, wishesService) {
        this.wishlistsRepository = wishlistsRepository;
        this.wishesService = wishesService;
    }
    async createWishlist(createWishlistDto, user) {
        const wishesList = await this.wishesService.findManyByIdWishes(createWishlistDto.itemsId);
        await this.wishlistsRepository.save(Object.assign(Object.assign({}, createWishlistDto), { owner: user, items: wishesList }));
        return await this.wishlistsRepository.findOne({
            where: { name: createWishlistDto.name },
            relations: ['owner', 'items'],
        });
    }
    async findAllWishlists() {
        return await this.wishlistsRepository.find({
            relations: ['owner', 'items'],
        });
    }
    async findWishlistById(id) {
        const wishlist = await this.wishlistsRepository.findOne({
            where: { id },
            relations: ['owner', 'items'],
        });
        if (!wishlist) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishlistNotFound);
        }
        return wishlist;
    }
    async updateWishlist(id, updateWishlistDto, userId) {
        const wishlist = await this.findWishlistById(id);
        if (!wishlist) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishlistNotFound);
        }
        if (wishlist.owner.id !== userId) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishlistForbidden);
        }
        const wishes = await this.wishesService.findManyByIdWishes(updateWishlistDto.itemsId || []);
        return await this.wishlistsRepository.save(Object.assign(Object.assign({}, wishlist), { name: updateWishlistDto.name, image: updateWishlistDto.image, description: updateWishlistDto.description, items: wishes.concat(wishlist.items) }));
    }
    async deleteWishlistById(id, userId) {
        const wishlist = await this.findWishlistById(id);
        if (!wishlist) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishlistNotFound);
        }
        if (wishlist.owner.id !== userId) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishlistForbidden);
        }
        await this.wishlistsRepository.delete(id);
        return wishlist;
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map