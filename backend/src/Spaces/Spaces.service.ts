import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpacesEntity } from '../Entities/spaces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(SpacesEntity)
    private readonly SpacesRepository: Repository<SpacesEntity>,
  ) {}
  async findAll() {
    return await this.SpacesRepository.find();
  }
}
