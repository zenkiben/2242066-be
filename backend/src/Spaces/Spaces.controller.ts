import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SpacesService } from './Spaces.service';
import { CustomException } from 'src/exception/CustomException';

@Controller('Spaces')
export class SpacesController {
  constructor(private service: SpacesService) {}

  @HttpCode(200)
  @Get()
  async findAll() {
    const Spaces = await this.service.findAll();
    if (!Spaces) {
      throw new CustomException('Spaces not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', data: Spaces };
  }
}
