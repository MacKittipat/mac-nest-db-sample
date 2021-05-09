import { Controller, Get, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private configService: ConfigService) {}

  @Get()
  helloWorld(): string {
    this.logger.debug(`App name = ${this.configService.get('APP_NAME')}`);
    this.logger.debug(`Env = ${this.configService.get('ENV')}`);
    return 'Hello World';
  }
}
