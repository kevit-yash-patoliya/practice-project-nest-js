import { HydratedDocument, Types } from 'mongoose';
import { TaskPriority, TaskStatus } from '../../task/schemas/task.schema';
export type SubTaskDocument = HydratedDocument<SubTask>;
export declare class SubTask {
    taskId: Types.ObjectId;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignedTo?: Types.ObjectId;
    createdBy: Types.ObjectId;
    dueDate?: Date;
    completed: boolean;
    order: number;
}
export declare const SubTaskSchema: import("mongoose").Schema<SubTask, import("mongoose").Model<SubTask, any, any, any, import("mongoose").Document<unknown, any, SubTask, any, {}> & SubTask & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SubTask, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SubTask>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<SubTask> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
