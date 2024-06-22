import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { Partido } from './entities/partido.entity';
import { Torneo } from '../torneo/entities/torneo.entity'; // Asegúrate de la ruta correcta

@Module({
  imports: [TypeOrmModule.forFeature([Partido, Torneo])],
  controllers: [PartidoController],
  providers: [PartidoService],
})
export class PartidoModule {}
