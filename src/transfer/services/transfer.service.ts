import { HttpException, Injectable,HttpStatus } from '@nestjs/common';
import { FilterQuery, Model, SortOrder } from 'mongoose';
import { Transfer } from '../entity/transfer.entity';
import { TransferResponseDto } from "../dto's/responses/transfer-response";
import { InjectModel } from '@nestjs/mongoose';
import { TransferDto } from "../dto's/commons/transfer.dto";


@Injectable()
export class TransferService {
  constructor(@InjectModel(Transfer.name) protected transferModel: Model<Transfer>) { }

  async create(createTransferDto: TransferDto): Promise<Transfer> {
    const existTransfer = await this.transferModel.findOne({ transferId: createTransferDto.transferId }).exec();
    if (existTransfer) {
      throw new HttpException(
        `Transfer with id ${createTransferDto.transferId} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdTransfer = new this.transferModel(createTransferDto);
    return await createdTransfer.save();
  }

  async findAll(): Promise<Transfer[]> {
    return this.transferModel.find().exec();
  }

  async findOne(id: string): Promise<Transfer> {
    const transfer = await this.transferModel.findOne({ transferId: id }).exec();
    if (!transfer) {
      throw new HttpException(
        `Transfer with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return transfer;
  }

  async findPaginated(
    filter: FilterQuery<Transfer>,
    sort?: Record<string, SortOrder>,
    docsPerPage?: number,
    offset?: number,
  ): Promise<TransferResponseDto[]> {
    const records = await this.transferModel
      .find(filter)
      .sort(sort)
      .skip(offset)
      .limit(docsPerPage)
      .exec();

    if (!records) {
      throw new HttpException(
        'No books found with the provided criteria',
        HttpStatus.NOT_FOUND,
      );
    }
    return records.map((record) => this.mapEntityToDto(record));
  }

  mapEntityToDto(transfer: Transfer): TransferResponseDto {
    const { transferId, sender, receiver, amount, date, createdAt, updatedAt } =
      transfer;
    return { transferId, sender, receiver, amount, date, createdAt, updatedAt };
  }

  async update(id: string, updateTransferDto: TransferDto): Promise<Transfer> {
    const updatedTransfer = await this.transferModel.findOneAndUpdate({ transferId: id}, updateTransferDto, { new: true}).exec();
    if (!updatedTransfer){
      throw new HttpException(`Transfer with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
    return updatedTransfer;
  }

  async remove(id: string): Promise<void> {
    const deletedTransfer = await this.transferModel.findOneAndDelete({
      transferId: id }).exec();
    if (!deletedTransfer){
      throw new HttpException(
        `Transfer with id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }
  }
}

