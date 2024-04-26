import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class TransferDto {
    @IsNotEmpty()
    @IsString()
    transferId: string;

    @IsNotEmpty()
    @IsString()
    sender: string;

    @IsNotEmpty()
    @IsString()
    receiver: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsDate()
    date: Date;
}