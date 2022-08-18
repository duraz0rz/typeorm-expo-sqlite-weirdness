import "reflect-metadata";
import { DataSource } from "typeorm";
import * as SQLite from "expo-sqlite";
import { CommonDataSourceOptions } from "./options.js";

export const AppDataSource = new DataSource({
  ...CommonDataSourceOptions,
  type: "expo",
  driver: SQLite,
  database: ":memory:",
  synchronize: true,
  logging: false,
});
