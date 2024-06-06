import { HttpException } from '@nestjs/common';
import { ErrorCode } from './error-codes';
export declare class ServerException extends HttpException {
    code: ErrorCode;
    constructor(code: ErrorCode);
}
