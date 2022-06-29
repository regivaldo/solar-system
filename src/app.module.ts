import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      autoLoadEntities: true,
      synchronize: true,
      database: path.resolve(__dirname, '..', 'db.sqlite'),
    }),
    PlanetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
