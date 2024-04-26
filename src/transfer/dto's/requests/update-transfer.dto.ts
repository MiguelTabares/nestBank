import { IsOptional, IsString, IsNumber, IsDate } from "class-validator";
import { TransferDto } from "../commons/transfer.dto";

export class UpdateTransferDto extends TransferDto{
    @IsOptional()
    @IsString()
    sender: string;

    @IsOptional()
    @IsString()
    receiver: string;

    @IsOptional()
    @IsNumber()
    amount: number;
}
