export class PlanetDto {
  public readonly id: number;
  public readonly name: string;
  public readonly x: number;
  public readonly y: number;
  public readonly z: number;

  public constructor(opts?: Partial<PlanetDto>) {
    Object.assign(this, opts);
  }
}
