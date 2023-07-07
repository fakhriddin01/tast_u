import { PartialType } from '@nestjs/mapped-types';
import { CreateUcellDto } from './create-ucell.dto';

export class UpdateUcellDto extends PartialType(CreateUcellDto) {}
