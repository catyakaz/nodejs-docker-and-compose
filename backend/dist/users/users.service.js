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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wish_entity_1 = require("../wishes/entities/wish.entity");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const hash_service_1 = require("../hash/hash.service");
const server_exception_1 = require("../exceptions/server.exception");
const error_codes_1 = require("../exceptions/error-codes");
let UsersService = class UsersService {
    constructor(usersRepository, wishesRepository, hashService) {
        this.usersRepository = usersRepository;
        this.wishesRepository = wishesRepository;
        this.hashService = hashService;
    }
    async createUser(createUserDto) {
        const isUserAlreadyExists = await this.usersRepository.findBy([
            { username: createUserDto.username },
            { email: createUserDto.email },
        ]);
        if (isUserAlreadyExists.length > 0) {
            throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserAlreadyExists);
        }
        return this.usersRepository.save(Object.assign(Object.assign({}, createUserDto), { password: await this.hashService.hashPassword(createUserDto.password) }));
    }
    async findUserByUsername(username) {
        return await this.usersRepository.findOneBy({ username });
    }
    async findUserByEmail(email) {
        return await this.usersRepository.findOneBy({ email });
    }
    async findUserById(id) {
        return await this.usersRepository.findOneBy({ id });
    }
    async updateUserById(id, updateUserDto) {
        const user = await this.findUserById(id);
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const emailMatches = await this.findUserByEmail(updateUserDto.email);
            if (emailMatches) {
                throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserAlreadyExists);
            }
        }
        if (updateUserDto.username && updateUserDto.username !== user.username) {
            const usernameMatches = await this.findUserByUsername(updateUserDto.username);
            if (usernameMatches) {
                throw new server_exception_1.ServerException(error_codes_1.ErrorCode.UserAlreadyExists);
            }
        }
        if (updateUserDto.password) {
            updateUserDto.password = await this.hashService.hashPassword(updateUserDto.password);
        }
        const newUserData = Object.assign(Object.assign({}, user), { password: updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.password, email: updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.email, about: updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.about, username: updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.username, avatar: updateUserDto === null || updateUserDto === void 0 ? void 0 : updateUserDto.avatar });
        await this.usersRepository.update(user.id, newUserData);
        return await this.findUserById(id);
    }
    async findUserWishes(id) {
        return this.wishesRepository.find({
            where: { owner: { id } },
            relationLoadStrategy: 'join',
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
    async findMany(query) {
        return await this.usersRepository.find({
            where: [{ username: (0, typeorm_2.Like)(`${query}%`) }, { email: (0, typeorm_2.Like)(`${query}%`) }],
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        hash_service_1.HashService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map