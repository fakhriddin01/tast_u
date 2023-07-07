import { Module } from '@nestjs/common';
import { UcellModule } from './ucell/ucell.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ucell } from './ucell/models/ucell.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: Number('5432'),
      username: 'postgres',
      password: 'postgres',
      database: 'ucell',
      models: [Ucell],
      autoLoadModels: true,
      logging: false
  }),
  UcellModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
