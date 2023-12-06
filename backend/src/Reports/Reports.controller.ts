import { Controller } from '@nestjs/common';
import { ReportsService } from './Reports.service';

@Controller('Reports')
export class ReportsController {
  constructor(private service: ReportsService) {}
}
