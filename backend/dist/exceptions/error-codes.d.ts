import { HttpStatus } from '@nestjs/common';
export declare enum ErrorCode {
    UpdateError = 400,
    SaveError = 400,
    IncorrectData = 401,
    Forbidden = 403,
    DeleteForbidden = 403,
    OfferForbidden = 403,
    WishForbidden = 403,
    WishlistForbidden = 403,
    OfferRaisedForbidden = 403,
    UserNotFound = 404,
    OfferNotFound = 404,
    WishNotFound = 404,
    WishesNotFound = 404,
    WishlistNotFound = 404,
    UserAlreadyExists = 409
}
export declare const code2message: Map<ErrorCode, string>;
export declare const code2status: Map<ErrorCode, HttpStatus>;
