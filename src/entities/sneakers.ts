import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Sneakers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  brand!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column("text")
  color!: string;

  @Column("decimal")
  size!: number;
}