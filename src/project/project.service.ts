import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ProjectRepository } from './repositories/project.repository';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  create(dto: CreateProjectDto) {
    return this.projectRepository.create(dto);
  }

  findAll() {
    return this.projectRepository.findAll();
  }

  findOne(id: string) {
    return this.projectRepository.findById(id);
  }

  findByUser(userId: string) {
    return this.projectRepository.findByUser(new Types.ObjectId(userId));
  }

  update(id: string, dto: UpdateProjectDto) {
    return this.projectRepository.update(id, dto);
  }

  remove(id: string) {
    return this.projectRepository.delete(id);
  }

  addMember(id: string, userId: string) {
    return this.projectRepository.addMember(id, new Types.ObjectId(userId));
  }

  removeMember(id: string, userId: string) {
    return this.projectRepository.removeMember(id, new Types.ObjectId(userId));
  }
}
