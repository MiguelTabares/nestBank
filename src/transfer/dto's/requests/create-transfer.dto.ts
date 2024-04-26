import {IsNotEmpty,IsString,IsNumber,IsDate} from "class-validator";

export class CreateTransferDto {
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

