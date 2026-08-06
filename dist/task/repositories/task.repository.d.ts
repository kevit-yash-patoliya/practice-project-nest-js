import { FilterQuery, Model, Types } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
export declare class TaskRepository {
    private readonly taskModel;
    constructor(taskModel: Model<TaskDocument>);
    private toObjectId;
    private mapDtoToDocument;
    create(dto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(filter?: FilterQuery<Task>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    findByProject(projectId: Types.ObjectId): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    update(id: string, dto: UpdateTaskDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
