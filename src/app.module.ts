import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { SubTaskModule } from './subtask/subtask.module';

@Module({
  imports: [TaskModule, SubTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
