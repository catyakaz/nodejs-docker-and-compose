import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ServerException } from '../exceptions/server.exception';
export declare class ServerExceptionFilter implements ExceptionFilter {
    catch(exception: ServerException, host: ArgumentsHost): void;
}
