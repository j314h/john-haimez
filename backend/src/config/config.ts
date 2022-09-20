import { Logger } from '@nestjs/common';
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
      entities: [],
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
};
