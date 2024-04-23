import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransferDto {
    @IsNotEmpty()
    @IsString()
    bookId: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsNumber()
    pages: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}