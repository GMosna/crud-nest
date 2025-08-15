import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_SERVER || 'localhost',
      port: parseInt(process.env.DB_PORT) || 1433,
      username: process.env.DB_USER || 'sa',
      password: process.env.DB_PASSWORD || 'YourPassword123',
      database: process.env.DB_NAME || 'crud_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend', 'build'),
      serveRoot: '/',
      exclude: ['/api*'],
    }),
    UsersModule,
  ],
})
export class AppModule {}
