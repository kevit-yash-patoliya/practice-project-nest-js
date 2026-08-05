import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  REVIEW = 'review',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Task {
  @Prop({
    type: Types.ObjectId,
    ref: 'Project',
    required: true,
    index: true,
  })
  projectId!: Types.ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  title!: string;

  @Prop({
    default: '',
  })
  description!: string;

  @Prop({
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  status!: TaskStatus;

  @Prop({
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  priority!: TaskPriority;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  createdBy!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  assignedTo?: Types.ObjectId;

  @Prop({
    default: null,
  })
  dueDate?: Date;

  @Prop({
    default: false,
  })
  archived!: boolean;

  @Prop({
    default: false,
  })
  completed!: boolean;

  @Prop({
    default: 0,
  })
  order!: number;

  @Prop({
    type: [String],
    default: [],
  })
  labels!: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
