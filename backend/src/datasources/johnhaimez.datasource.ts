import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'johnhaimez',
  connector: 'postgresql',
  url: 'postgres://johndev:johndev@localhost:6432/johnhaimez',
  host: 'localhost',
  port: 5432,
  user: 'johndev',
  password: 'johndev',
  database: 'johnhaimez'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class JohnhaimezDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'johnhaimez';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.johnhaimez', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
