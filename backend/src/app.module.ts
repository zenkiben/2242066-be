import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEntity } from './Entities/reports.entity';
import { SpacesEntity } from './Entities/spaces.entity';
import { SurfacesEntity } from './Entities/surfaces.entity';
import { ReportsModule } from './Reports/Reports.module';
import { SpacesModule } from './Spaces/Spaces.module';
import { SurfacesModule } from './Surfaces/Surfaces.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: '123456789',
      database: 'ads',
      entities: [ReportsEntity, SpacesEntity, SurfacesEntity],
      synchronize: true,
      migrationsRun: true,
    }),
    ReportsModule,
    SpacesModule,
    SurfacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
