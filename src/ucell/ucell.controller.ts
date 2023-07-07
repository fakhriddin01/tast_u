import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UcellService } from './ucell.service';
import { CreateUcellDto } from './dto/create-ucell.dto';
import { UpdateUcellDto } from './dto/update-ucell.dto';

@Controller('ucell')
export class UcellController {
  constructor(private readonly ucellService: UcellService) {}

  @Post()
  create(@Body() createUcellDto: CreateUcellDto) {
    return this.ucellService.create(createUcellDto);
  }

  @Get()
  findAll() {
    return this.ucellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ucellService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUcellDto: UpdateUcellDto) {
    return this.ucellService.update(+id, updateUcellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ucellService.remove(+id);
  }
}
