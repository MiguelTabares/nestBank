import { TransferDto } from "../commons/transfer.dto";
export declare class UpdateTransferDto extends TransferDto {
    sender: string;
    receiver: string;
    amount: number;
}
