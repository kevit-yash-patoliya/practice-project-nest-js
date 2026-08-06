import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Project, ProjectDocument } from '../schemas/project.schema';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectRepository {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,
  ) {}

  private toObjectId(id: string): Types.ObjectId {
    return new Types.ObjectId(id);
  }

  private mapDtoToDocument(
    dto: CreateProjectDto | UpdateProjectDto,
  ): Partial<Project> {
    const data: Partial<Project> = { ...dto } as Partial<Project>;
    if (dto.createdBy) data.createdBy = this.toObjectId(dto.createdBy);
    if (dto.sharedIds)
      data.sharedIds = dto.sharedIds.map((id) => this.toObjectId(id));
    return data;
  }

  create(dto: CreateProjectDto) {
    return this.projectModel.create(this.mapDtoToDocument(dto));
  }

  findAll(filter: FilterQuery<Project> = {}) {
    return this.projectModel.find(filter);
  }

  findById(id: string) {
    return this.projectModel.findById(id);
  }

  findByUser(userId: Types.ObjectId) {
    return this.projectModel.find({
      $or: [{ createdBy: userId }, { sharedIds: userId }],
    });
  }

  update(id: string, dto: UpdateProjectDto) {
    return this.projectModel.findByIdAndUpdate(id, this.mapDtoToDocument(dto), {
      new: true,
    });
  }

  delete(id: string) {
    return this.projectModel.findByIdAndDelete(id);
  }

  addMember(id: string, userId: Types.ObjectId) {
    return this.projectModel.findByIdAndUpdate(
      id,
      { $addToSet: { sharedIds: userId } },
      { new: true },
    );
  }

  removeMember(id: string, userId: Types.ObjectId) {
    return this.projectModel.findByIdAndUpdate(
      id,
      { $pull: { sharedIds: userId } },
      { new: true },
    );
  }
}
