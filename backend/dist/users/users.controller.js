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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const server_exception_1 = require("../exceptions/server.exception");
const error_codes_1 = require("../exceptions/error-codes");
const server_exception_filter_1 = require("../filter/server-exception.filter");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getCurrentUser(req) {
        const currentUser = await this.usersService.findUserById(req.user.id);
        if (!currentUser) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserNotFound);
        }
        return currentUser;
    }
    async updateCurrentUserById(req, updateUserDto) {
        return await this.usersService.updateUserById(req.user.id, updateUserDto);
    }
    async findCurrentUserWishes(req) {
        return await this.usersService.findUserWishes(req.user.id);
    }
    async getUserData(username) {
        const user = await this.usersService.findUserByUsername(username);
        if (!user) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserNotFound);
        }
        return user;
    }
    async getUserWishes(username) {
        const user = await this.usersService.findUserByUsername(username);
        if (!user) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserNotFound);
        }
        return await this.usersService.findUserWishes(user.id);
    }
    async findUsersByQuery(query) {
        return await this.usersService.findMany(query);
    }
};
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateCurrentUserById", null);
__decorate([
    (0, common_1.Get)('me/wishes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findCurrentUserWishes", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserData", null);
__decorate([
    (0, common_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserWishes", null);
__decorate([
    (0, common_1.Post)('find'),
    __param(0, (0, common_1.Body)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsersByQuery", null);
UsersController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.UseFilters)(server_exception_filter_1.ServerExceptionFilter),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map