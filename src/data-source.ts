import "reflect-metadata";
import { DataSource } from "typeorm";
import { sneakers } from "./entities/sneakers";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [sneakers],
  migrations:[],
  subscribers:[]
});