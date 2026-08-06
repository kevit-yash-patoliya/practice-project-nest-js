// subtask.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SubTask, SubTaskSchema } from './schemas/subtask.schema';
import { SubtaskService } from './subtask.service';
import { SubtaskController } from './subtask.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: SubTask.name,
                schema: SubTaskSchema,
            },
        ]),
    ],
    controllers: [SubtaskController],
    providers: [SubtaskService],
    exports: [MongooseModule, SubtaskService],
})
export class SubTaskModule {}
