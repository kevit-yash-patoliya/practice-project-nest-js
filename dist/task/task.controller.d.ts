import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(dto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findByProject(projectId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, dto: UpdateTaskDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").Task, {}, {}> & import("./schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
