import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Transfer } from "../entity/transfer.entity"
import { PaginatedTransferRequestDto } from "../dto's/requests/paginated-transfer-request.dto";
import { TransferResponseDto } from "../dto's/responses/transfer-response";
import { TransferService } from '../services/transfer.service';
import { CreateTransferDto } from "../dto's/requests/create-transfer.dto";
import { UpdateTransferDto } from "../dto's/requests/update-transfer.dto";

@Controller("transfers")
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async create(
    @Body() createTransferDto: CreateTransferDto
  ): Promise<Transfer> {
    console.log('post');
    return this.transferService.create(createTransferDto);
  }

  @Get()
  async findAll(): Promise <Transfer[]> {
    console.log("teste")
    return this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Transfer> {
    return this.transferService.findOne(id);
  }

  @Get("paginated")
  @HttpCode(HttpStatus.OK)
  async findPaginated(
    @Query() query: PaginatedTransferRequestDto
  ): Promise<TransferResponseDto[]> {
    const transferList = await this.transferService.findPaginated(
      query,
      { createdAt: -1 },
      query.docsPerPage,
      query.offset
    );
    return transferList;
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateTransferDto: UpdateTransferDto): Promise<Transfer> {
    return this.transferService.update(id, updateTransferDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<void> {
    return this.transferService.remove(id);
  }
}
