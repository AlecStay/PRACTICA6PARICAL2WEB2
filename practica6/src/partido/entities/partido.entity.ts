import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipo } from '../../equipo/entities/equipo.entity';
import { Torneo } from '../../torneo/entities/torneo.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  idpartido: number;

  @ManyToOne(() => Torneo, torneo => torneo.partidos, { nullable: false })
  @JoinColumn({ name: "idtorneo" }) // Asegúrate de importar JoinColumn de 'typeorm'
  torneo: Torneo;

  @ManyToOne(() => Equipo, equipo => equipo.partidos, { nullable: false })
  equipo1: Equipo;

  @Column()
  equipo1Id: number;

  @Column()
  equipo2Id: number;

  @Column()
  golesEquipo1: number;

  @Column()
  golesEquipo2: number;

  @Column()
  observacion: string;

  @Column({ default: 'Activo' })
  Estado: string;
}