import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * type of variable environment "ENVIRONMENT"
 */
export type TEnvironment = 'PROD' | 'DEV' | 'TEST';

/**
 * interface for object config for app
 */
export interface IConfig {
  database: () => TypeOrmModuleOptions;
  selectPathEnv: (valueEnv: TEnvironment) => string;
  logInfoStartServer: () => void;
}
