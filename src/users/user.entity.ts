import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Report } from '../reports/report.entity';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`Insert user with ID: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Update user with ID: ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Remove user with ID: ${this.id}`);
  }
}
