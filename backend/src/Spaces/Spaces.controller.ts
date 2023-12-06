import { Controller } from '@nestjs/common';
import { SpacesService } from './Spaces.service';

@Controller('Spaces')
export class SpacesController {
  constructor(private service: SpacesService) {}
}
