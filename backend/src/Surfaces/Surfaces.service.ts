import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurfacesEntity } from '../Entities/surfaces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurfacesService {
  constructor(
    @InjectRepository(SurfacesEntity)
    private readonly SurfacesRepository: Repository<SurfacesEntity>,
  ) {}
  async findAll() {
    return await this.SurfacesRepository.find();
  }
}
