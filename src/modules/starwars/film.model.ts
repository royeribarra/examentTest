import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Films',
  timestamps: false,
})
export class FilmModel extends Model<FilmModel> {
  @Column
  nombre: string;

  @Column
  peopleId: number;

  @Column
  planetId: number;
}
