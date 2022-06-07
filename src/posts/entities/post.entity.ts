import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  content: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;
}
