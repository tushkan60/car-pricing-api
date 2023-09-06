import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

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
