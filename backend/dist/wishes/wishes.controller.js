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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const wishes_service_1 = require("./wishes.service");
const create_wish_dto_1 = require("./dto/create-wish.dto");
const update_wish_dto_1 = require("./dto/update-wish.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const server_exception_filter_1 = require("../filter/server-exception.filter");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    async createWish({ user }, dto) {
        return await this.wishesService.createWish(dto, user);
    }
    async findAllWishes() {
        return await this.wishesService.findAllWishes();
    }
    async findLastWishes() {
        return await this.wishesService.getLastWishes();
    }
    async findTopWishes() {
        return await this.wishesService.getTopWishes();
    }
    async findWishById(id) {
        return await this.wishesService.findWishById(Number(id));
    }
    async updateWish({ user }, id, dto) {
        return await this.wishesService.updateWish(Number(id), dto, user.id);
    }
    async deleteWish({ user }, id) {
        return await this.wishesService.removeWishById(Number(id), user.id);
    }
    async copyWish({ user }, id) {
        return await this.wishesService.copyWish(Number(id), user);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "createWish", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findAllWishes", null);
__decorate([
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findLastWishes", null);
__decorate([
    (0, common_1.Get)('top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findTopWishes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findWishById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_wish_dto_1.UpdateWishDto]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "updateWish", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "deleteWish", null);
__decorate([
    (0, common_1.Post)(':id/copy'),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "copyWish", null);
WishesController = __decorate([
    (0, common_1.UseFilters)(server_exception_filter_1.ServerExceptionFilter),
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map