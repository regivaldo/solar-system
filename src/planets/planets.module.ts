import { Planet } from './entities/planet';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PlanetMapperService } from './services/planet-mapper.service';
import { PlanetService } from './services/planet.service';
import { PlanetController } from './controllers/planet/planet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Planet])],
  providers: [PlanetMapperService, PlanetService],
  controllers: [PlanetController],
})
export class PlanetsModule {}
