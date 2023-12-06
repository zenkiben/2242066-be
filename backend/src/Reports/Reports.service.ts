import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportsEntity } from '../Entities/reports.entity';
import { Repository } from 'typeorm';
import { CustomException } from 'src/exception/CustomException';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity)
    private readonly ReportsRepository: Repository<ReportsEntity>,
  ) {}
  async findAll() {
    return await this.ReportsRepository.find();
  }
  async createAdvertisement(data: ReportsEntity) {
    try {
      const advertisement = await this.ReportsRepository.create(data);
      return await this.ReportsRepository.save(advertisement);
    } catch (error) {
      console.log(error);
      throw new CustomException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
