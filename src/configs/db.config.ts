import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";
import * as process from "process";

config({path: `${__dirname}/../../.env.${process.env.ENV}`});
const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow<string>('DB_HOST'),
  port: configService.getOrThrow<number>('DB_PORT'),
  username: configService.getOrThrow<string>('DB_USERNAME'),
  password: configService.getOrThrow<string>('DB_PASSWORD'),
  database: configService.getOrThrow<string>('DB_DATABASE'),
  entities: ['dist/**/*.entity.js'],
  migrations: [`${__dirname}/../../migrations/**`],
  synchronize: configService.getOrThrow<string>('ENV') === 'dev',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;