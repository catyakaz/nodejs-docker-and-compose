"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerException = void 0;
const common_1 = require("@nestjs/common");
const error_codes_1 = require("./error-codes");
class ServerException extends common_1.HttpException {
    constructor(code) {
        super(error_codes_1.code2message.get(code) ||
            'Ошибка сервера, повторите запрос или попробуйте позднее', error_codes_1.code2status.get(code) || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        this.code = code;
    }
}
exports.ServerException = ServerException;
//# sourceMappingURL=server.exception.js.map