import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class sneakers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  marca!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column("text")
  color!: string;

  @Column("decimal")
  size!: number;
}