import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { FilmModel } from './film.model';

@Table({
  timestamps: true,
  tableName: 'People',
})
export class PeopleModel extends Model<PeopleModel> {
  @Column
  nombre: string;

  @Column
  altura: string;

  @Column
  peso: string;

  @Column
  color_pelo: string;

  @Column
  color_piel: string;

  @Column
  ojos_color: string;

  @Column
  ano_nacimiento: string;

  @Column
  genero: string;

  @Column
  mundo_natal: string;

  @Column
  fecha_creacion: Date;

  @Column
  fecha_edicion: Date;

  @Column
  direccion_url: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;
}
