import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { IPeopleNew, IPlanetNew } from 'src/interfaces';
import { Type } from 'class-transformer';

export class PeopleDto implements IPeopleNew {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  altura: string;

  @IsNotEmpty()
  @IsString()
  peso: string;

  @IsNotEmpty()
  @IsString()
  color_pelo: string;

  @IsNotEmpty()
  @IsString()
  color_piel: string;

  @IsNotEmpty()
  @IsString()
  ojos_color: string;

  @IsNotEmpty()
  @IsString()
  ano_nacimiento: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsString()
  mundo_natal: string;

  @IsNotEmpty()
  @IsArray()
  peliculas: string[];

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha_creacion: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha_edicion: Date;

  @IsNotEmpty()
  @IsString()
  direccion_url: string;
}

export class PlanetDto implements IPlanetNew {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  periodo_rotacion: string;

  @IsNotEmpty()
  @IsString()
  periodo_orbita: string;

  @IsNotEmpty()
  @IsString()
  diametro: string;

  @IsNotEmpty()
  @IsString()
  clima: string;

  @IsNotEmpty()
  @IsString()
  gravedad: string;

  @IsNotEmpty()
  @IsString()
  terreno: string;

  @IsNotEmpty()
  @IsString()
  superficie_agua: string;

  @IsNotEmpty()
  @IsString()
  poblacion: string;

  @IsNotEmpty()
  @IsArray()
  peliculas: string[];

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha_creacion: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha_edicion: Date;

  @IsNotEmpty()
  @IsString()
  direccion_url: string;
}
