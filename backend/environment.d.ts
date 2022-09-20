declare namespace NodeJS {
  // type de la variable d'environment "environment" => pour spécifier notre type d'environement
  export type Environment = 'PROD' | 'DEV' | 'TEST';

  // interface du .env
  export interface ProcessEnv {
    // app
    ENVIRONMENT?: Environment;
    APP_PORT?: number;
    APP_PREFIX_URL?: string;
    APP_SECRET_JWT?: string;
    // database
    DB_HOST?: string;
    DB_PORT?: number;
    DB_USER?: string;
    DB_PW?: string;
    DB_NAME?: string;
    // doc
  }
}
