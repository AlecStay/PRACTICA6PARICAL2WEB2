import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from '../../partido/entities/partido.entity';

@Entity()
export class Torneo {
  @PrimaryGeneratedColumn()
  idtorneo: number;

  @Column()
  Descripcion: string;

  @Column({ default: 'Activo' })
  Estado: string;

  @OneToMany(() => Partido, partido => partido.torneo)
  partidos: Partido[];
}
