import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PeopleModel } from './people.model';
import { StarwarsController } from './startwars.controller';
import { StarwarsService } from './starwars.service';
import { ConfigModule } from '@nestjs/config';
import { PlanetModel } from './planet.model';
import { FilmModel } from './film.model';

@Module({
  imports: [
    SequelizeModule.forFeature([PlanetModel, PeopleModel, FilmModel]),
    ConfigModule,
  ],
  controllers: [StarwarsController],
  exports: [SequelizeModule],
  providers: [StarwarsService],
})
export class StarwarsModule {}
