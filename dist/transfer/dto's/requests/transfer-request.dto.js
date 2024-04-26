"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const transfer_dto_1 = require("../commons/transfer.dto");
class TransferRequestDto extends (0, swagger_1.OmitType)(transfer_dto_1.TransferDto, ['transferId']) {
}
exports.TransferRequestDto = TransferRequestDto;
//# sourceMappingURL=transfer-request.dto.js.map