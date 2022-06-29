import { AddPlanetDto } from '../../dtos/add-planet-dto';
import { EditPlanetDto } from '../../dtos/edit-planet-dto';
import { PlanetService } from '../../services/planet.service';
import { PlanetDto } from '../../dtos/planet-dto';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';

@Controller('planet')
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get()
  public findAll(): Promise<PlanetDto[]> {
    return this.planetService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<PlanetDto> {
    return this.planetService.findOne(id);
  }

  @Put(':id')
  public edit(
    @Param('id') id: number,
    @Body() planet: EditPlanetDto,
  ): Promise<PlanetDto> {
    return this.planetService.edit(id, planet);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  public add(@Body() planet: AddPlanetDto): Promise<PlanetDto> {
    return this.planetService.add(planet);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<PlanetDto> {
    return this.planetService.remove(id);
  }
}
