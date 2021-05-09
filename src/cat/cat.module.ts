import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './service/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
