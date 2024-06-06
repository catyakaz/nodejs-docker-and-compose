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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wish_entity_1 = require("./entities/wish.entity");
const typeorm_2 = require("typeorm");
const server_exception_1 = require("../exceptions/server.exception");
const error_codes_1 = require("../exceptions/error-codes");
let WishesService = class WishesService {
    constructor(wishesRepository) {
        this.wishesRepository = wishesRepository;
    }
    async createWish(createWishDto, user) {
        await this.wishesRepository.save(Object.assign(Object.assign({}, createWishDto), { owner: user }));
        return {};
    }
    async findAllWishes() {
        const wishes = await this.wishesRepository.find({
            relations: ['owner', 'offers'],
        });
        return wishes;
    }
    async findWishById(id) {
        const wish = await this.wishesRepository.findOne({
            where: { id },
            relations: [
                'owner',
                'offers',
                'offers.user',
                'offers.user.wishes',
                'offers.user.offers',
                'offers.user.wishlists',
            ],
        });
        if (!wish) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishNotFound);
        }
        return wish;
    }
    async findManyByIdWishes(idWishes) {
        return this.wishesRepository.find({
            where: { id: (0, typeorm_2.In)(idWishes) },
        });
    }
    async getLastWishes() {
        return await this.wishesRepository.find({
            take: 40,
            order: { createdAt: 'desc' },
            relations: [
                'owner',
                'offers',
                'offers.user',
                'offers.user.wishes',
                'offers.user.offers',
                'offers.user.wishlists',
            ],
        });
    }
    async getTopWishes() {
        return await this.wishesRepository.find({
            take: 20,
            order: { copied: 'desc' },
            relations: [
                'owner',
                'offers',
                'offers.user',
                'offers.user.wishes',
                'offers.user.offers',
                'offers.user.wishlists',
            ],
        });
    }
    async updateWish(wishId, updateWishDto, userId) {
        const wish = await this.findWishById(wishId);
        if (!wish) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishNotFound);
        }
        if (wish.raised > 0) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.OfferRaisedForbidden);
        }
        if (wish.owner.id !== userId) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishForbidden);
        }
        await this.wishesRepository.update(wishId, updateWishDto);
        return {};
    }
    async updateWishRaised(wishId, raised) {
        await this.wishesRepository.update(wishId, { raised });
        return {};
    }
    async removeWishById(wishId, userId) {
        const wish = await this.findWishById(wishId);
        if (!wish) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishNotFound);
        }
        if (wish.owner.id !== userId) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishForbidden);
        }
        await this.wishesRepository.delete(wishId);
        return wish;
    }
    async copyWish(wishId, user) {
        const wish = await this.wishesRepository.findOneBy({ id: wishId });
        if (!wish) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.WishNotFound);
        }
        delete wish.id;
        delete wish.createdAt;
        delete wish.updatedAt;
        await this.wishesRepository.update(wishId, {
            copied: (wish.copied += 1),
        });
        const wishCopy = Object.assign(Object.assign({}, wish), { owner: user, copied: 0, raised: 0, offers: [] });
        await this.createWish(wishCopy, user);
        return {};
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map