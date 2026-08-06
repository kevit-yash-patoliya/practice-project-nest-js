import { HydratedDocument, Types } from 'mongoose';
export type TaskDocument = HydratedDocument<Task>;
export declare enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    REVIEW = "review",
    COMPLETED = "completed"
}
export declare enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
export declare class Task {
    projectId: Types.ObjectId;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdBy: Types.ObjectId;
    assignedTo?: Types.ObjectId;
    dueDate?: Date;
    archived: boolean;
    completed: boolean;
    order: number;
    labels: string[];
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, import("mongoose").Document<unknown, any, Task, any, {}> & Task & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Task>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Task> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
