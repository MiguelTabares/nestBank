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
exports.TransferService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const transfer_entity_1 = require("../entity/transfer.entity");
const mongoose_2 = require("@nestjs/mongoose");
let TransferService = class TransferService {
    constructor(transferModel) {
        this.transferModel = transferModel;
    }
    async create(createTransferDto) {
        const existTransfer = await this.transferModel.findOne({ transferId: createTransferDto.transferId }).exec();
        if (existTransfer) {
            throw new common_1.HttpException(`Transfer with id ${createTransferDto.transferId} already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
        const createdTransfer = new this.transferModel(createTransferDto);
        return await createdTransfer.save();
    }
    async findAll() {
        return this.transferModel.find().exec();
    }
    async findOne(id) {
        const transfer = await this.transferModel.findOne({ transferId: id }).exec();
        if (!transfer) {
            throw new common_1.HttpException(`Transfer with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return transfer;
    }
    async findPaginated(filter, sort, docsPerPage, offset) {
        const records = await this.transferModel
            .find(filter)
            .sort(sort)
            .skip(offset)
            .limit(docsPerPage)
            .exec();
        if (!records) {
            throw new common_1.HttpException('No books found with the provided criteria', common_1.HttpStatus.NOT_FOUND);
        }
        return records.map((record) => this.mapEntityToDto(record));
    }
    mapEntityToDto(transfer) {
        const { transferId, sender, receiver, amount, date, createdAt, updatedAt } = transfer;
        return { transferId, sender, receiver, amount, date, createdAt, updatedAt };
    }
    async update(id, updateTransferDto) {
        const updatedTransfer = await this.transferModel.findOneAndUpdate({ transferId: id }, updateTransferDto, { new: true }).exec();
        if (!updatedTransfer) {
            throw new common_1.HttpException(`Transfer with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return updatedTransfer;
    }
    async remove(id) {
        const deletedTransfer = await this.transferModel.findOneAndDelete({
            transferId: id
        }).exec();
        if (!deletedTransfer) {
            throw new common_1.HttpException(`Transfer with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.TransferService = TransferService;
exports.TransferService = TransferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(transfer_entity_1.Transfer.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TransferService);
//# sourceMappingURL=transfer.service.js.map