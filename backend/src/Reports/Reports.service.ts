import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportsEntity } from '../Entities/reports.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity)
    private readonly ReportsRepository: Repository<ReportsEntity>,
  ) {}
}
