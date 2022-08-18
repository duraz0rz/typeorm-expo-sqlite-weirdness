import { DataSource } from "typeorm";
import { CommonDataSourceOptions } from "./options.js";

export const AppDataSource = new DataSource({
  ...CommonDataSourceOptions,
  type: "sqlite",
  database: "src/migration/migration-database.sqlite",
  synchronize: true,
  logging: false,
});
