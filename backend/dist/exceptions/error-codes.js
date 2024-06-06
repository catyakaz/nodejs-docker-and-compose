"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code2status = exports.code2message = exports.ErrorCode = void 0;
const common_1 = require("@nestjs/common");
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["UpdateError"] = 400] = "UpdateError";
    ErrorCode[ErrorCode["SaveError"] = 400] = "SaveError";
    ErrorCode[ErrorCode["IncorrectData"] = 401] = "IncorrectData";
    ErrorCode[ErrorCode["Forbidden"] = 403] = "Forbidden";
    ErrorCode[ErrorCode["DeleteForbidden"] = 403] = "DeleteForbidden";
    ErrorCode[ErrorCode["OfferForbidden"] = 403] = "OfferForbidden";
    ErrorCode[ErrorCode["WishForbidden"] = 403] = "WishForbidden";
    ErrorCode[ErrorCode["WishlistForbidden"] = 403] = "WishlistForbidden";
    ErrorCode[ErrorCode["OfferRaisedForbidden"] = 403] = "OfferRaisedForbidden";
    ErrorCode[ErrorCode["UserNotFound"] = 404] = "UserNotFound";
    ErrorCode[ErrorCode["OfferNotFound"] = 404] = "OfferNotFound";
    ErrorCode[ErrorCode["WishNotFound"] = 404] = "WishNotFound";
    ErrorCode[ErrorCode["WishesNotFound"] = 404] = "WishesNotFound";
    ErrorCode[ErrorCode["WishlistNotFound"] = 404] = "WishlistNotFound";
    ErrorCode[ErrorCode["UserAlreadyExists"] = 409] = "UserAlreadyExists";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.code2message = new Map([
    [ErrorCode.UpdateError, 'Ошибка обновления, некорректные данные'],
    [ErrorCode.SaveError, 'Ошибка сохранения данных'],
    [ErrorCode.IncorrectData, 'Некорректная пара логин и пароль'],
    [ErrorCode.Forbidden, 'Можно удалять только свои подарки'],
    [ErrorCode.WishForbidden, 'Нельзя изменять или удалять чужие подарки'],
    [ErrorCode.WishlistForbidden, 'Нельзя изменять или удалять чужие вишлисты'],
    [ErrorCode.DeleteForbidden, 'Можно удалять только свои списки подарков'],
    [ErrorCode.OfferRaisedForbidden, 'Слишком большая суммa'],
    [ErrorCode.OfferForbidden, 'Нельзя вносить деньги на свои подарки'],
    [
        ErrorCode.UserAlreadyExists,
        'Пользователь с таким email или username уже зарегистрирован',
    ],
    [ErrorCode.UserNotFound, 'Пользователь не найден'],
    [ErrorCode.WishNotFound, 'Подарок не найден'],
    [ErrorCode.WishesNotFound, 'Подарки не найдены'],
    [ErrorCode.WishlistNotFound, 'Список подарков не найден'],
    [ErrorCode.OfferNotFound, 'Предложение не найдено'],
]);
exports.code2status = new Map([
    [ErrorCode.UpdateError, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.SaveError, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.IncorrectData, common_1.HttpStatus.UNAUTHORIZED],
    [ErrorCode.Forbidden, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.WishForbidden, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.OfferForbidden, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.DeleteForbidden, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.OfferRaisedForbidden, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.UserAlreadyExists, common_1.HttpStatus.CONFLICT],
    [ErrorCode.UserNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.OfferNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.WishNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.WishesNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.WishlistNotFound, common_1.HttpStatus.NOT_FOUND],
]);
//# sourceMappingURL=error-codes.js.map