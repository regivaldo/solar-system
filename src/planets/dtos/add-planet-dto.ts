import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class AddPlanetDto {
  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsNumberString()
  public readonly x: number;

  @IsNumberString()
  public readonly y: number;

  @IsNumberString()
  public readonly z: number;

  public constructor(opts?: Partial<AddPlanetDto>) {
    Object.assign(this, opts);
  }
}
