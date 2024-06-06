"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const server_exception_1 = require("../exceptions/server.exception");
let ServerExceptionFilter = class ServerExceptionFilter {
    catch(exception, host) {
        const status = exception.getStatus();
        const message = exception.getResponse();
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(status).json({
            errorCode: exception,
            status: status,
            message: message,
        });
    }
};
ServerExceptionFilter = __decorate([
    (0, common_1.Catch)(server_exception_1.ServerException)
], ServerExceptionFilter);
exports.ServerExceptionFilter = ServerExceptionFilter;
//# sourceMappingURL=server-exception.filter.js.map