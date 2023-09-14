import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PeopleModel } from './people.model';
import {
  IPeopleNew,
  IPeopleOriginal,
  IPlanetNew,
  IPlanetOriginal,
} from 'src/interfaces';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { PlanetModel } from './planet.model';
import { FilmModel } from './film.model';

@Injectable()
export class StarwarsService {
  protected starwarsApiUrl: string;

  constructor(
    @InjectModel(PeopleModel)
    private peopleModel: typeof PeopleModel,
    @InjectModel(FilmModel)
    private filmModel: typeof FilmModel,
    @InjectModel(PlanetModel)
    private planetModel: typeof PlanetModel,
    private configService: ConfigService,
  ) {
    this.starwarsApiUrl = this.configService.get('STARWARS_API_URL');
  }

  // async findAll(): Promise<UserModel[]> {
  //   return this.userModel.findAll();
  // }

  async createFilms(
    films: string[],
    peopleId: number | null,
    planetId: number | null,
  ): Promise<any> {
    try {
      for (const film of films) {
        const filmFound = await FilmModel.findOne({
          where: { nombre: film },
        });

        if (filmFound) {
          const updObj = planetId ? { peopleId } : { planetId };
          await filmFound.update(updObj);
        } else {
          await this.filmModel.create({ peopleId, nombre: film, planetId });
        }
      }
    } catch (error) {
      // console.log(error);
    }
  }

  async createPeople(people: IPeopleNew): Promise<PeopleModel> {
    const newPeople = await this.peopleModel.create(people);
    await this.createFilms(people.peliculas, newPeople.id, null);
    return newPeople;
  }

  async createPlanet(planet: IPlanetNew): Promise<PlanetModel> {
    const newPlanet = await this.planetModel.create(planet);
    await this.createFilms(planet.peliculas, null, newPlanet.id);
    return newPlanet;
  }

  async getStarWarsInfo(type: string, order: string): Promise<any> {
    const starWarsUrl = `${this.starwarsApiUrl}/${type}/${order}/`;

    const { data } = await axios.get<IPlanetOriginal | IPeopleOriginal>(
      starWarsUrl,
    );
    return data;
  }
}
