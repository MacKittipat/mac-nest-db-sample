import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CatService } from './service/cat.service';
import { ConfigService } from '@nestjs/config';
import { Cat } from './entity/cat.entity';

@Controller('cats')
export class CatController {
  private readonly logger = new Logger(CatController.name);

  constructor(
    private catService: CatService,
    private configService: ConfigService,
  ) {}

  @Get(':id')
  getCats(@Param('id', ParseIntPipe) id): Promise<Cat> {
    this.logger.debug(`App name = ${this.configService.get('APP_NAME')}`);
    this.logger.debug(`Env = ${this.configService.get('ENV')}`);
    this.logger.debug(`Getting cat with id=${id}`);
    if (id === 666) {
      throw new HttpException(
        `Error when query cat with id=${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.catService.findById(id);
  }

  @Get()
  getAllCats(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post()
  createCat(@Body() catDto: CatDto): Promise<Cat> {
    return this.catService.createCat(catDto);
  }
}
