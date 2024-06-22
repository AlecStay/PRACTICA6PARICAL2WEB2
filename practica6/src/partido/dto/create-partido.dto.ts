// create-partido.dto.ts
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePartidoDto {
  @IsInt()
  @IsNotEmpty()
  idtorneo: number;

  @IsInt()
  @IsNotEmpty()
  equipo1Id: number;

  @IsInt()
  @IsNotEmpty()
  equipo2Id: number;

  @IsInt()
  @IsNotEmpty()
  golesEquipo1: number;

  @IsInt()
  @IsNotEmpty()
  golesEquipo2: number;

  @IsNotEmpty()
  observacion: string;

  @IsNotEmpty()
  Estado: string;
}
