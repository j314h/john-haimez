import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * config database for ORM
 */
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'johndev',
  password: 'johndev',
  database: 'johnhaimez',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
};
