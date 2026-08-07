import { Module, DynamicModule, Global, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import chalk from 'chalk';
import { DATABASE_URL } from '../utils/global-constant';

@Global()
@Module({})
export class DatabaseModule {
    private static readonly logger = new Logger(DatabaseModule.name);

    static forRoot(): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                ConfigModule,
                MongooseModule.forRootAsync({
                    imports: [ConfigModule],
                    useFactory: async (configService:ConfigService) => {
                        DatabaseModule.logger.log(chalk.white("Database connecting"));
                        return {
                            uri: configService.get<string>(DATABASE_URL),
                            autoIndex: false,
                            serverSelectionTimeoutMS: 5000,
                            socketTimeoutMS: 45000,
                            connectionFactory: (connection) => {
                                DatabaseModule.logger.log(chalk.white("Database connected"));
                                return connection;
                            },
                        };
                    },
                    inject: [ConfigService],
                }),
            ],
            exports: [MongooseModule],
        };
    }
}
