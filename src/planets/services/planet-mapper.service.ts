import { Planet } from '../entities/planet';
import { PlanetDto } from '../dtos/planet-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanetMapperService {
  public modelToDto({ id, name, x, y, z }: Planet): PlanetDto {
    return new PlanetDto({ id, name, x, y, z });
  }
}
