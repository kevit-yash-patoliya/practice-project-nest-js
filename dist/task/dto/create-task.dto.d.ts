import { TaskPriority, TaskStatus } from '../schemas/task.schema';
export declare class CreateTaskDto {
    projectId: string;
    title: string;
    description?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    createdBy: string;
    assignedTo?: string;
}
