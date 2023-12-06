import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { SurfacesService } from './Surfaces.service';
import { CustomException } from 'src/exception/CustomException';

@Controller('Surfaces')
export class SurfacesController {
  constructor(private service: SurfacesService) {}

  @HttpCode(200)
  @Get()
  async findAll() {
    const Surfaces = await this.service.findAll();
    if (!Surfaces) {
      throw new CustomException('Surfaces not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', data: Surfaces };
  }
  @HttpCode(200)
  @Get('/:id')
  async findById(@Param('id') id: number) {
    const Surfaces = await this.service.findById(id);
    if (!Surfaces) {
      throw new CustomException('Surfaces not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', data: Surfaces };
  }
}
