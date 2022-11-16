import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
