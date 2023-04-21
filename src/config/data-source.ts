import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
import { entities } from '../database/entities';
import { migrations } from '../database/migrations';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

if (!DB_HOST || !DB_USERNAME || !DB_PASSWORD || !DB_PORT || !DB_NAME) {
  console.error('environments is missing, check it');
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT as string),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  logging: false,
  logger: 'advanced-console',
  entities,
  // entities: [__dirname + "../database/entities/*{.js,.ts}"],
  subscribers: [],
  // migrations: [__dirname + "../database/migrations/*{.js,.ts}"],
  migrations,
  migrationsRun: true,
  migrationsTableName: 'migrations',
});
