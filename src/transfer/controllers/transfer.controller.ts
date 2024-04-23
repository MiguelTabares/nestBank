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
import { TransferService } from '../services/transfer.service';
import { TransferDto } from "../dto's/commons/transfer.dto";
import { PaginatedTransferRequestDto } from "../dto's/requests/paginated-transfer-request.dto";
import { TransferResponseDto } from "../dto's/responses/transfer-response";


@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  create(@Body() transfer: TransferDto){
    return this.transferService.create(transfer);
  }

  @Get()
  findAll(): TransferResponseDto[]{
    return this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.transferService.findOne(+id);
  }

  @Get('paginated')
  @HttpCode(HttpStatus.OK)
  async findPaginated(
    @Query() query: PaginatedTransferRequestDto,
  ): Promise<TransferResponseDto[]> {
    const bookList = await this.transferService.findPaginated(
      query,
      { createdAt: -1 },
      query.docsPerPage,
      query.offset,
    );
    return bookList;
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() transfer: TransferDto) {
    return this.transferService.update(+id, transfer);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.transferService.remove(+id);
  }
}
