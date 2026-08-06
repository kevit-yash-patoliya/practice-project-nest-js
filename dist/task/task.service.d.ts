import { Types } from 'mongoose';
import { TaskRepository } from './repositories/task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    create(dto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findByProject(projectId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, dto: UpdateTaskDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
