import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class EditPlanetDto {
  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsNumberString()
  public readonly x: number;

  @IsNumberString()
  public readonly y: number;

  @IsNumberString()
  public readonly z: number;

  public constructor(opts?: Partial<EditPlanetDto>) {
    Object.assign(this, opts);
  }
}
