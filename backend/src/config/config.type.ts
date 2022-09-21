import { JwtModuleOptions } from '@nestjs/jwt';
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
  secretJwt: string;
  jwtConfig: () => JwtModuleOptions;
  errorBad: (message: string) => { statusCode: number; message: string };
  errorUnauthorized: (message: string) => {
    statusCode: number;
    message: string;
  };
  errorForbidden: (message: string) => { statusCode: number; message: string };
}
