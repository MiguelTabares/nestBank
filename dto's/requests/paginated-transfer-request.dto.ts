import { IsNumber, IsOptional, IsString } from 'class-validator';
import { TransferRequestDto } from './transfer-request.dto';

export class PaginatedTransferRequestDto extends TransferRequestDto {
    @IsNumber()
    @IsOptional()
    docsPerPage?: number;

    @IsNumber()
    @IsOptional()
    offset?: number;

    @IsString()
    @IsOptional()
    sortBy?: string;
}