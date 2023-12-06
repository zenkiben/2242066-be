import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurfacesController } from './Surfaces.controller';
import { SurfacesEntity } from '../Entities/surfaces.entity';
import { SurfacesService } from './Surfaces.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurfacesEntity])],
  providers: [SurfacesService],
  controllers: [SurfacesController],
})
export class SurfacesModule {}
