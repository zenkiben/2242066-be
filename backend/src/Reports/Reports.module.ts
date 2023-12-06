import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './Reports.controller';
import { ReportsEntity } from '../Entities/reports.entity';
import { ReportsService } from './Reports.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportsEntity])],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
