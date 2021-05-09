import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat/entity/cat.entity';

@Module({
  imports: [
    CatModule,
    ConfigModule.forRoot({
      envFilePath: 'config/.env',
      isGlobal: true, // No need to import into other modules.
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'macnest',
      entities: [Cat],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
