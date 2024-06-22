import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from './entities/torneo.entity';
import { TorneoService } from './torneo.service';
import { TorneoController } from './torneo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneoController],
  providers: [TorneoService],
})
export class TorneoModule {}
