import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Reports')
export class ReportsEntity {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id', unsigned: true })
  id: string;
  @Column('int', { name: 'surface' })
  surface: number;
  @Column('varchar', { name: 'address', length: 255 })
  address: string;
  @Column('decimal', { name: 'long', precision: 10, scale: 6 })
  long: number;
  @Column('decimal', { name: 'lat', precision: 10, scale: 6 })
  lat: number;
  @Column('timestamp', { name: 'report_date', nullable: true })
  report_date: Date;
  @Column('varchar', { name: 'content', length: 255 })
  content: string;
  @Column('varchar', { name: 'phone', length: 255 })
  phone: string;
  @Column('int', { name: 'state' })
  state: number;
}
