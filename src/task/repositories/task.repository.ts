// repositories/task.repository.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  create(data: Partial<Task>) {
    return this.taskModel.create(data);
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

  update(id: string, data: Partial<Task>) {
    return this.taskModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
