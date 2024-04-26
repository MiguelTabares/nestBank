import { Module } from "@nestjs/common";
import { TransferModule } from "./transfer/transfer.module";
import { PersistenceModule } from "./libs/persistence";
import { ConfigModule } from "@nestjs/config";
import dbConfig from "./libs/persistence/db-config";

@Module({
  imports: [
    TransferModule,
    PersistenceModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      load: [dbConfig],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
