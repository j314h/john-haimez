import { User } from 'src/models/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
