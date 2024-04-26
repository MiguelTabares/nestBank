import { Module } from '@nestjs/common';
import { TransferController } from './controllers/transfer.controller';
import { TransferService } from './services/transfer.service';
import { MongooseModule }  from '@nestjs/mongoose'
import { Transfer, TransferSchema } from './entity/transfer.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Transfer.name, schema: TransferSchema}])],
  controllers: [TransferController],
  providers: [TransferService],
  exports: [TransferService]
})
export class TransferModule {}
