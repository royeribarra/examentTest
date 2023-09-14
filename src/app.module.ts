import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StarwarsModule } from './modules/starwars/starwars.module';
import { PeopleModel } from './modules/starwars/people.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import 'dotenv/config';
import { FilmModel } from './modules/starwars/film.model';
import { PlanetModel } from './modules/starwars/planet.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          dialect: 'mysql',
          host: config.get('DB_HOST'),
          port: parseInt(config.get('DB_PORT')),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          models: [PeopleModel, PlanetModel, FilmModel],
        };
      },
      inject: [ConfigService],
    }),
    StarwarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
