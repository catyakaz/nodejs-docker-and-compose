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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("./entities/offer.entity");
const typeorm_2 = require("typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
const getRaised_1 = require("./helpers/getRaised");
const server_exception_1 = require("../exceptions/server.exception");
const error_codes_1 = require("../exceptions/error-codes");
let OffersService = class OffersService {
    constructor(offersRepository, wishesService, dataSource) {
        this.offersRepository = offersRepository;
        this.wishesService = wishesService;
        this.dataSource = dataSource;
    }
    async createOffer(createOfferDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const wish = await this.wishesService.findWishById(createOfferDto.itemId);
            const raisedAmount = (0, getRaised_1.getRaisedAmount)(Number(wish.raised), createOfferDto.amount);
            if (user.id === wish.owner.id) {
                throw new server_exception_1.ServerException(error_codes_1.ErrorCode.OfferForbidden);
            }
            if (raisedAmount > wish.price) {
                throw new server_exception_1.ServerException(error_codes_1.ErrorCode.OfferRaisedForbidden);
            }
            await this.wishesService.updateWishRaised(createOfferDto.itemId, raisedAmount);
            const offer = await this.offersRepository.save(Object.assign(Object.assign({}, createOfferDto), { wish,
                user }));
            await queryRunner.commitTransaction();
            delete wish.owner.password;
            delete user.password;
            return offer;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAllOffers() {
        return await this.offersRepository.find({
            relations: ['item', 'user'],
        });
    }
    async findOneOffer(id) {
        const offer = await this.offersRepository.findOne({
            where: { id },
            relations: ['item', 'user'],
        });
        if (!offer) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.OfferNotFound);
        }
        delete offer.user.password;
        return offer;
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService,
        typeorm_2.DataSource])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map