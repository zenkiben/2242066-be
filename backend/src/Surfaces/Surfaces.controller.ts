import { Controller } from '@nestjs/common';
import { SurfacesService } from './Surfaces.service';

@Controller('Surfaces')
export class SurfacesController {
  constructor(private service: SurfacesService) {}
}
