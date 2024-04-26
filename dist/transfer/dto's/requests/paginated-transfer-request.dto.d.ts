import { TransferRequestDto } from './transfer-request.dto';
export declare class PaginatedTransferRequestDto extends TransferRequestDto {
    docsPerPage?: number;
    offset?: number;
    sortBy?: string;
}
