import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepository: Repository<Partido>,
  ) {}

  create(createPartidoDto: CreatePartidoDto): Promise<Partido> {
    const partido = this.partidoRepository.create(createPartidoDto);
    return this.partidoRepository.save(partido);
  }

  findAll(): Promise<Partido[]> {
    return this.partidoRepository.find();
  }

  findOne(id: number): Promise<Partido> {
    return this.partidoRepository.findOne({ where: { idpartido: id } });
  }

  async update(id: number, updatePartidoDto: UpdatePartidoDto): Promise<Partido> {
    await this.partidoRepository.update(id, updatePartidoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.partidoRepository.delete(id);
  }
}
