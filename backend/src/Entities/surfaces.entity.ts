import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Surfaces')
export class SurfacesEntity {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: string;
  @Column('varchar', { name: 'format', length: 255 })
  format: string;
  @Column('decimal', { name: 'width', precision: 10, scale: 6 })
  width: number;
  @Column('decimal', { name: 'height', precision: 10, scale: 6 })
  height: number;
  @Column('varchar', { name: 'imgUrl', length: 255 })
  imgUrl: string;
  @Column('int', { name: 'space' })
  space: number;
}
