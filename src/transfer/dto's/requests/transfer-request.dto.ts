import { OmitType } from '@nestjs/swagger';
import { TransferDto } from '../commons/transfer.dto';

export class TransferRequestDto extends OmitType(TransferDto, ['transferId']) {}
