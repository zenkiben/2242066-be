import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Spaces')
export class SpacesEntity {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: string;
  @Column('varchar', { name: 'address', length: 255 })
  address: string;
  @Column('decimal', { name: 'long', precision: 10, scale: 6 })
  long: number;
  @Column('decimal', { name: 'lat', precision: 10, scale: 6 })
  lat: number;
  @Column('varchar', { name: 'type', length: 255 })
  type: string;
  @Column('varchar', { name: 'format', length: 255 })
  format: string;
  @Column('varchar', { name: 'ward', length: 255 })
  ward: string;
}
