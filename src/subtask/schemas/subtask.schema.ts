import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { TaskPriority, TaskStatus } from '../../task/schemas/task.schema';

export type SubTaskDocument = HydratedDocument<SubTask>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class SubTask {
  @Prop({
    type: Types.ObjectId,
    ref: 'Task',
    required: true,
    index: true,
  })
  taskId!: Types.ObjectId;

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
  })
  assignedTo?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  createdBy!: Types.ObjectId;

  @Prop()
  dueDate?: Date;

  @Prop({
    default: false,
  })
  completed!: boolean;

  @Prop({
    default: 0,
  })
  order!: number;
}

export const SubTaskSchema = SchemaFactory.createForClass(SubTask);
