import { Injectable } from '@nestjs/common';
import { CreateUcellDto } from './dto/create-ucell.dto';
import { UpdateUcellDto } from './dto/update-ucell.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ucell } from './models/ucell.model';

@Injectable()
export class UcellService {
  
  constructor(@InjectModel(Ucell) private readonly ucellRepo: typeof Ucell){}


  create(createUcellDto: CreateUcellDto) {
    return 'This action adds a new ucell';
  }

  findAll() {
    return this.ucellRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} ucell`;
  }

  update(id: number, updateUcellDto: UpdateUcellDto) {
    return `This action updates a #${id} ucell`;
  }

  remove(id: number) {
    return `This action removes a #${id} ucell`;
  }
}
