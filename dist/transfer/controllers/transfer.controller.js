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
exports.TransferController = void 0;
const common_1 = require("@nestjs/common");
const paginated_transfer_request_dto_1 = require("../dto's/requests/paginated-transfer-request.dto");
const transfer_service_1 = require("../services/transfer.service");
const create_transfer_dto_1 = require("../dto's/requests/create-transfer.dto");
const update_transfer_dto_1 = require("../dto's/requests/update-transfer.dto");
let TransferController = class TransferController {
    constructor(transferService) {
        this.transferService = transferService;
    }
    async create(createTransferDto) {
        console.log('post');
        return this.transferService.create(createTransferDto);
    }
    async findAll() {
        console.log("teste");
        return this.transferService.findAll();
    }
    async findOne(id) {
        return this.transferService.findOne(id);
    }
    async findPaginated(query) {
        const transferList = await this.transferService.findPaginated(query, { createdAt: -1 }, query.docsPerPage, query.offset);
        return transferList;
    }
    async update(id, updateTransferDto) {
        return this.transferService.update(id, updateTransferDto);
    }
    async remove(id) {
        return this.transferService.remove(id);
    }
};
exports.TransferController = TransferController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transfer_dto_1.CreateTransferDto]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("paginated"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginated_transfer_request_dto_1.PaginatedTransferRequestDto]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "findPaginated", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transfer_dto_1.UpdateTransferDto]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "remove", null);
exports.TransferController = TransferController = __decorate([
    (0, common_1.Controller)("transfers"),
    __metadata("design:paramtypes", [transfer_service_1.TransferService])
], TransferController);
//# sourceMappingURL=transfer.controller.js.map