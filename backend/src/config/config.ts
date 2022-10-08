import { Logger } from '@nestjs/common';
import { Auth } from 'src/models/auth/entities/auth.entity';
import { Role } from 'src/models/role/entities/role.entity';
import { Setting } from 'src/models/setting/entities/setting.entity';
import { User } from 'src/models/user/entities/user.entity';
import { IConfig, TEnvironment } from './config.type';

/**
 * object for config for app
 */
export const config: IConfig = {
  /**
   * object for param TypeOrm
   */
  database: () => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [User, Role, Auth, Setting],
      synchronize: true,
      autoLoadEntities: true,
    };
  },

  /**
   * function that allows to configure the environment variable =>
   * which will determine the .env file to use
   * @param valueEnv => process.env.ENVIRONMENT => 'PROD' | 'DEV' | 'TEST' =>
   * defined in the console by the developer
   */
  selectPathEnv: (valueEnv: TEnvironment) => {
    const env = {
      PROD: '.env.prod',
      DEV: '.env.dev',
      TEST: '.env.test',
    };

    return valueEnv ? env[`${valueEnv}`] : env.DEV;
  },

  /**
   * message in terminal for start server
   */
  logInfoStartServer: () => {
    new Logger('Main App').log(
      `Server start in port : ${process.env.APP_PORT}`,
    );
    new Logger('Main App').log(`Database name : ${process.env.DB_NAME}`);
    new Logger('Main App').log(
      `Url doc in : ${process.env.APP_PORT}/${process.env.APP_PORT}`,
    );
  },

  /**
   * character string for the jwt secret
   */
  secretJwt: `${process.env.APP_SECRET_JWT}`,

  /**
   * config for jwt
   */
  jwtConfig: () => {
    return {
      secret: config.secretJwt,
      signOptions: { expiresIn: '600s' },
    };
  },

  /**
   * create object for BadRequestException
   * @param message string
   * @returns object for BadRequestException
   */
  errorBad: (message: string) => {
    return {
      statusCode: 400,
      message,
    };
  },

  /**
   * create object for UnauthorizedException
   * @param message string
   * @returns object for UnauthorizedException
   */
  errorUnauthorized: (message: string) => {
    return {
      statusCode: 401,
      message,
    };
  },

  /**
   * create object for ForbiddenException
   * @param message string
   * @returns object for ForbiddenException
   */
  errorForbidden: (message: string) => {
    return {
      statusCode: 403,
      message,
    };
  },
};
