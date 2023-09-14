import {
  IPeopleNew,
  IPeopleOriginal,
  IPlanetNew,
  IPlanetOriginal,
  IWordsTranslated,
} from 'src/interfaces';

const wordsTranslated: IWordsTranslated = {
  birth_year: 'ano_nacimiento',
  eye_color: 'ojos_color',
  films: 'peliculas',
  gender: 'genero',
  hair_color: 'color_pelo',
  height: 'altura',
  homeworld: 'mundo_natal',
  mass: 'peso',
  name: 'nombre',
  skin_color: 'color_piel',
  created: 'fecha_creacion',
  edited: 'fecha_edicion',
  species: 'especies',
  starships: 'naves_estelares',
  url: 'direccion_url',
  vehicles: 'vehiculos',
  rotation_period: 'periodo_rotacion',
  orbital_period: 'periodo_orbita',
  diameter: 'diametro',
  climate: 'clima',
  gravity: 'gravedad',
  terrain: 'terreno',
  surface_water: 'superficie_agua',
  population: 'poblacion',
  residents: 'residentes',
};

const translate = (obj: IPeopleOriginal | IPlanetOriginal) => {
  const translatedObj: IPlanetNew | IPeopleNew = {} as any;
  for (const oldKey in obj) {
    const newKey = wordsTranslated[oldKey] || oldKey;
    translatedObj[newKey] = obj[oldKey];
  }
  return translatedObj;
};

export default translate;
