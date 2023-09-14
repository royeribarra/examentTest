import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Res,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StarwarsService } from './starwars.service';
import { Response } from 'express';
import translate from '../../helpers/translate';
import { IPeopleOriginal, IPlanetOriginal } from 'src/interfaces';
import { PeopleDto, PlanetDto } from './starwars.dto';

@Controller('')
export class StarwarsController {
  constructor(private starwarsService: StarwarsService) {}

  @Post('/people')
  @UsePipes(new ValidationPipe({ skipMissingProperties: false }))
  @HttpCode(201)
  async createPerson(@Body() person: PeopleDto, @Res() res: Response) {
    try {
      const result = await this.starwarsService.createPeople(person);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: 404, data: 'Not found' });
    }
  }

  @Post('/planets')
  @HttpCode(201)
  async createPlanet(@Body() planet: PlanetDto, @Res() res: Response) {
    try {
      const result = await this.starwarsService.createPlanet(planet);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: 404, data: 'Not found' });
    }
  }

  @Get('/people/:order')
  async findPeople(@Param('order') order: string, @Res() res: Response) {
    try {
      const data: IPlanetOriginal | IPeopleOriginal =
        await this.starwarsService.getStarWarsInfo('people', order);

      res.send(translate(data));
    } catch (error) {
      console.log(error);
      res.status(404).send({ status: 404, data: 'Not found' });
    }
  }

  @Get('/planets/:order')
  async findPlanet(@Param('order') order: string, @Res() res: Response) {
    try {
      const data: IPlanetOriginal | IPeopleOriginal =
        await this.starwarsService.getStarWarsInfo('planets', order);

      res.send(translate(data));
    } catch (error) {
      console.log(error);
      res.status(404).send({ status: 404, data: 'Not found' });
    }
  }
}
