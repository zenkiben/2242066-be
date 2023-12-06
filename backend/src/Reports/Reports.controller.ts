import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ReportsService } from './Reports.service';
import { CustomException } from 'src/exception/CustomException';

@Controller('Reports')
export class ReportsController {
  constructor(private service: ReportsService) {}

  @HttpCode(200)
  @Get()
  async findAll() {
    const Reports = await this.service.findAll();
    if (!Reports) {
      throw new CustomException('Reports not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', data: Reports };
  }
}
