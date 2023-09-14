import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './modules/train/train.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "./configs/db.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TrainModule,
    AdminModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
