import "reflect-metadata";
import { DataSource } from "typeorm";
import { Sneakers } from "./entities/Sneakers";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Sneakers],
  migrations:[],
  subscribers:[]
});