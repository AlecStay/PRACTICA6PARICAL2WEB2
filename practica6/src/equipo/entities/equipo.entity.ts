import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from '../../partido/entities/partido.entity';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  idequipo: number;

  @Column()
  Descripcion: string;

  @Column()
  Serie: string;

  @Column({ default: 'Activo' })
  Estado: string;

  @OneToMany(() => Partido, partido => partido.equipo1)
  partidos: Partido[];
}