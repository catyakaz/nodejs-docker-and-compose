"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaisedAmount = void 0;
const getRaisedAmount = (raised, offerAmount) => {
    const totalAmount = raised + offerAmount;
    const roundedResult = totalAmount.toFixed(2);
    return Number(roundedResult);
};
exports.getRaisedAmount = getRaisedAmount;
//# sourceMappingURL=getRaised.js.map