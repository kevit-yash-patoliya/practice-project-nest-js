import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { TaskRepository } from './repositories/task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(private readonly taskRepository: TaskRepository) {}

    create(dto: CreateTaskDto) {
        return this.taskRepository.create(dto);
    }

    findAll() {
        return this.taskRepository.findAll();
    }

    findByProject(projectId: string) {
        return this.taskRepository.findByProject(new Types.ObjectId(projectId));
    }

    findOne(id: string) {
        return this.taskRepository.findById(id);
    }

    update(id: string, dto: UpdateTaskDto) {
        return this.taskRepository.update(id, dto);
    }

    remove(id: string) {
        return this.taskRepository.delete(id);
    }
}
