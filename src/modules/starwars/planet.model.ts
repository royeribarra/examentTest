import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'Planets',
})
export class PlanetModel extends Model<PlanetModel> {
  @Column
  nombre: string;

  @Column
  periodo_rotacion: string;

  @Column
  periodo_orbita: string;

  @Column
  diametro: string;

  @Column
  clima: string;

  @Column
  gravedad: string;

  @Column
  terreno: string;

  @Column
  superficie_agua: string;

  @Column
  poblacion: string;

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
