import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CatModule,
    ConfigModule.forRoot({
      envFilePath: 'config/.env',
      isGlobal: true, // No need to import into other modules.
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
