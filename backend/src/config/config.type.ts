import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * type of variable environment "ENVIRONMENT"
 */
export type TEnvironment = 'PROD' | 'DEV' | 'TEST';

/**
 * type for error exception
 */
type TError = {
  message: string;
  statusCode: number;
};

/**
 * interface for object config for app
 */
export interface IConfig {
  database: () => TypeOrmModuleOptions;
  selectPathEnv: (valueEnv: TEnvironment) => string;
  logInfoStartServer: () => void;
  secretJwt: string;
  jwtConfig: () => JwtModuleOptions;
  errorBad: (message: string) => TError;
  errorUnauthorized: (message: string) => TError;
  errorForbidden: (message: string) => TError;
}
