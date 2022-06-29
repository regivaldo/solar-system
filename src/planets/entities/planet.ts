import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Planet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public x: number;

  @Column()
  public y: number;

  @Column()
  public z: number;

  constructor(name: string, x: number, y: number, z: number) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
