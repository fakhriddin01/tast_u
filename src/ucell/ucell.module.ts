import { Module } from '@nestjs/common';
import { UcellService } from './ucell.service';
import { UcellController } from './ucell.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ucell } from './models/ucell.model';

@Module({
  imports:[SequelizeModule.forFeature([Ucell]),
  
  ],
  controllers: [UcellController],
  providers: [UcellService]
})
export class UcellModule {}
