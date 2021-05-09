import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CatService } from './service/cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get(':id')
  getCats(@Param('id', ParseIntPipe) id): CatDto {
    if (id === 666) {
      throw new HttpException(
        `Error when query cat with id=${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.catService.findCat(id);
  }

  @Get()
  getAllCats(): CatDto[] {
    return this.catService.findAllCat();
  }

  @Post()
  createCat(@Body() catDto: CatDto): CatDto {
    console.log(catDto);
    return this.catService.createCat(catDto);
  }
}
