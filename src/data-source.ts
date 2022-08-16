import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
import * as SQLite from "expo-sqlite";

export const AppDataSource = new DataSource({
  type: "expo",
  driver: SQLite,
  database: ":memory:",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
