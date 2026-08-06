import { IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator';
import { TaskPriority, TaskStatus } from '../schemas/task.schema';

export class CreateTaskDto {
  @IsMongoId()
  projectId!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsMongoId()
  createdBy!: string;

  @IsOptional()
  @IsMongoId()
  assignedTo?: string;
}
