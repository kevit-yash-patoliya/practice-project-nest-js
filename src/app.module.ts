import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { SubTaskModule } from './subtask/subtask.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, SubTaskModule],

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
