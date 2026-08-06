import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskRepository {
    constructor(
        @InjectModel(Task.name)
        private readonly taskModel: Model<TaskDocument>,
    ) {}

    private toObjectId(id: string): Types.ObjectId {
        return new Types.ObjectId(id);
    }

    private mapDtoToDocument(
        dto: CreateTaskDto | UpdateTaskDto,
    ): Partial<Task> {
        const data: Partial<Task> = { ...dto } as Partial<Task>;
        if (dto.projectId) data.projectId = this.toObjectId(dto.projectId);
        if (dto.createdBy) data.createdBy = this.toObjectId(dto.createdBy);
        if (dto.assignedTo) data.assignedTo = this.toObjectId(dto.assignedTo);
        else if ('assignedTo' in dto && dto.assignedTo === undefined)
            delete data.assignedTo;
        return data;
    }

    create(dto: CreateTaskDto) {
        return this.taskModel.create(this.mapDtoToDocument(dto));
    }

    findAll(filter: FilterQuery<Task> = {}) {
        return this.taskModel.find(filter);
    }

    findById(id: string) {
        return this.taskModel.findById(id);
    }

    findByProject(projectId: Types.ObjectId) {
        return this.taskModel.find({ projectId });
    }

    update(id: string, dto: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(
            id,
            this.mapDtoToDocument(dto),
            {
                new: true,
            },
        );
    }

    delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }
}
