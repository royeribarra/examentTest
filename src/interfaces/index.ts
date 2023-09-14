export interface IWordsTranslated {
  birth_year: string;
  eye_color: string;
  films: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string;
  starships: string;
  url: string;
  vehicles: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string;
}

export interface IPeopleOriginal {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IPlanetOriginal {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IPeopleNew {
  nombre: string;
  altura: string;
  peso: string;
  color_pelo: string;
  color_piel: string;
  ojos_color: string;
  ano_nacimiento: string;
  genero: string;
  mundo_natal: string;
  peliculas: string[];
  fecha_creacion: Date;
  fecha_edicion: Date;
  direccion_url: string;
}

export interface IPlanetNew {
  nombre: string;
  periodo_rotacion: string;
  periodo_orbita: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  superficie_agua: string;
  poblacion: string;
  peliculas: string[];
  fecha_creacion: Date;
  fecha_edicion: Date;
  direccion_url: string;
}

export interface IFilm {
  nombre: string;
  peopleId: number;
  planetId: number;
}
