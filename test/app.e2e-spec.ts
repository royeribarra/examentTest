import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const arrayIds: number[] = [1, 2, 3, 4, 5, 8, 9];
  const getRandomId = (arr: number[]): number => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it(`(GET) /people/:id people`, async () => {
    const randomId = getRandomId(arrayIds);
    const validObjectkeys = [
      'nombre',
      'altura',
      'peso',
      'color_pelo',
      'color_piel',
      'ojos_color',
      'ano_nacimiento',
      'genero',
      'mundo_natal',
      'peliculas',
      'especies',
      'vehiculos',
      'naves_estelares',
      'fecha_creacion',
      'fecha_edicion',
      'direccion_url',
    ];

    const test = await request(app.getHttpServer())
      .get(`/people/${randomId}`)
      .send();
    const resKeys: string[] = Object.keys(test.body);
    expect(test.status).toBe(200);
    expect(typeof test.body).toBe('object');
    expect(resKeys.sort()).toEqual(validObjectkeys.sort());
  });

  it(`(GET) /planets/:id planet`, async () => {
    const randomId = getRandomId(arrayIds);
    const validObjectkeys = [
      'nombre',
      'periodo_rotacion',
      'periodo_orbita',
      'diametro',
      'clima',
      'gravedad',
      'terreno',
      'superficie_agua',
      'poblacion',
      'residentes',
      'peliculas',
      'fecha_creacion',
      'fecha_edicion',
      'direccion_url',
    ];

    const test = await request(app.getHttpServer())
      .get(`/planets/${randomId}`)
      .send();

    const resKeys: string[] = Object.keys(test.body);
    expect(test.status).toBe(200);
    expect(typeof test.body).toBe('object');
    expect(resKeys.sort()).toEqual(validObjectkeys.sort());
  });

  it(`(POST) /people `, async () => {
    const req = {
      nombre: 'Biggs Darklighter',
      altura: '183',
      peso: '84',
      color_pelo: 'black',
      color_piel: 'light',
      ojos_color: 'brown',
      ano_nacimiento: '24BBY',
      genero: 'male',
      mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
      peliculas: ['https://swapi.py4e.com/api/films/1/'],
      fecha_creacion: '2014-12-10T15:59:50.509000Z',
      fecha_edicion: '2014-12-20T21:17:50.323000Z',
      direccion_url: 'https://swapi.py4e.com/api/people/9/',
    };

    const response = await request(app.getHttpServer())
      .post(`/people`)
      .send(req);

    expect(response.status).toBe(201);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('id');
  });

  it(`(POST) /planets `, async () => {
    const req = {
      nombre: 'Tatooine',
      periodo_rotacion: '23',
      periodo_orbita: '304',
      diametro: '10465',
      clima: 'arid',
      gravedad: '1 standard',
      terreno: 'desert',
      superficie_agua: '1',
      poblacion: '200000',
      peliculas: [
        'https://swapi.py4e.com/api/films/1/',
        'https://swapi.py4e.com/api/films/3/',
        'https://swapi.py4e.com/api/films/4/',
        'https://swapi.py4e.com/api/films/5/',
        'https://swapi.py4e.com/api/films/6/',
      ],
      fecha_creacion: '2014-12-09T13:50:49.641000Z',
      fecha_edicion: '2014-12-20T20:58:18.411000Z',
      direccion_url: 'https://swapi.py4e.com/api/planets/1/',
    };

    const response = await request(app.getHttpServer())
      .post(`/planets`)
      .send(req);

    expect(response.status).toBe(201);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('id');
  });
});
