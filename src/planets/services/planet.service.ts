import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EditPlanetDto } from '../dtos/edit-planet-dto';
import { Planet } from '../entities/planet';
import { PlanetMapperService } from './planet-mapper.service';
import { AddPlanetDto } from '../dtos/add-planet-dto';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet)
    private readonly planetRepository: Repository<Planet>,
    private readonly planetMapper: PlanetMapperService,
  ) {}

  public async findAll(): Promise<Planet[]> {
    const planets = await this.planetRepository.find();
    return planets.map(this.planetMapper.modelToDto);
  }

  public async findOne(id: number): Promise<Planet> {
    const planet = await this.planetRepository.findOne({ where: { id } });
    if (planet === undefined || planet === null) throw new NotFoundException();
    return this.planetMapper.modelToDto(planet);
  }

  public async add({ name, x, y, z }: AddPlanetDto): Promise<Planet> {
    let planet = new Planet(name, x, y, z);
    planet = await this.planetRepository.save(planet);
    return this.planetMapper.modelToDto(planet);
  }

  public async edit(
    id: number,
    { name, x, y, z }: EditPlanetDto,
  ): Promise<Planet> {
    let planet = await this.planetRepository.findOne({ where: { id } });
    if (planet === undefined || planet === null) throw new NotFoundException();

    planet.name = name;
    planet.x = x;
    planet.y = y;
    planet.z = z;

    planet = await this.planetRepository.save(planet);

    return this.planetMapper.modelToDto(planet);
  }

  public async remove(id: number): Promise<Planet> {
    let planet = await this.planetRepository.findOne({ where: { id } });
    if (planet === undefined || planet === null) throw new NotFoundException();

    planet = await this.planetRepository.remove(planet);

    return planet;
  }
}
