import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from './entities/torneo.entity';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';

@Injectable()
export class TorneoService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepository: Repository<Torneo>,
  ) {}

  async create(createTorneoDto: CreateTorneoDto): Promise<Torneo> {
    const nuevoTorneo = this.torneoRepository.create(createTorneoDto);
    return await this.torneoRepository.save(nuevoTorneo);
  }

  findAll(): Promise<Torneo[]> {
    return this.torneoRepository.find();
  }

  findOne(id: number): Promise<Torneo> {
    return this.torneoRepository.findOne({ where: { idtorneo: id } });
  }

  async update(id: number, updateTorneoDto: UpdateTorneoDto): Promise<Torneo> {
    const torneoToUpdate = await this.findOne(id);
    this.torneoRepository.merge(torneoToUpdate, updateTorneoDto);
    return await this.torneoRepository.save(torneoToUpdate);
  }

  async remove(id: number): Promise<void> {
    const torneoToRemove = await this.findOne(id);
    await this.torneoRepository.remove(torneoToRemove);
  }
}
