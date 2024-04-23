import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { TransferDto } from '../commons/transfer.dto';

export class TransferResponseDto extends TransferDto {
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    createdAt: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    updatedAt: Date;
}