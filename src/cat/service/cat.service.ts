import { Injectable } from '@nestjs/common';
import { CatDto } from '../dto/cat.dto';

@Injectable()
export class CatService {
  findCat(id: number): CatDto {
    return new CatDto('Pumpkin', id);
  }

  findAllCat(): CatDto[] {
    return [new CatDto('Pumpkin', 4), new CatDto('Orange', 2)];
  }

  createCat(catDto: CatDto): CatDto {
    return catDto;
  }
}
