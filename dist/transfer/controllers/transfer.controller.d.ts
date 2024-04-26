import { Transfer } from "../entity/transfer.entity";
import { PaginatedTransferRequestDto } from "../dto's/requests/paginated-transfer-request.dto";
import { TransferResponseDto } from "../dto's/responses/transfer-response";
import { TransferService } from '../services/transfer.service';
import { CreateTransferDto } from "../dto's/requests/create-transfer.dto";
import { UpdateTransferDto } from "../dto's/requests/update-transfer.dto";
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    create(createTransferDto: CreateTransferDto): Promise<Transfer>;
    findAll(): Promise<Transfer[]>;
    findOne(id: string): Promise<Transfer>;
    findPaginated(query: PaginatedTransferRequestDto): Promise<TransferResponseDto[]>;
    update(id: string, updateTransferDto: UpdateTransferDto): Promise<Transfer>;
    remove(id: string): Promise<void>;
}
