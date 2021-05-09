import { Injectable } from '@nestjs/common';
import { CatDto } from '../dto/cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from '../entity/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  findById(id: number): Promise<Cat> {
    return this.catRepository.findOne(id);
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  createCat(catDto: CatDto): Promise<Cat> {
    const cat: Cat = new Cat();
    cat.name = catDto.name;
    cat.age = catDto.age;
    return this.catRepository.save(cat);
  }
}
