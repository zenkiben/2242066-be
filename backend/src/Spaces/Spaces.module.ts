import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpacesController } from './Spaces.controller';
import { SpacesEntity } from '../Entities/spaces.entity';
import { SpacesService } from './Spaces.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpacesEntity])],
  providers: [SpacesService],
  controllers: [SpacesController],
})
export class SpacesModule {}
