"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("../schemas/task.schema");
let TaskRepository = class TaskRepository {
    taskModel;
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    toObjectId(id) {
        return new mongoose_2.Types.ObjectId(id);
    }
    mapDtoToDocument(dto) {
        const data = { ...dto };
        if (dto.projectId)
            data.projectId = this.toObjectId(dto.projectId);
        if (dto.createdBy)
            data.createdBy = this.toObjectId(dto.createdBy);
        if (dto.assignedTo)
            data.assignedTo = this.toObjectId(dto.assignedTo);
        else if ('assignedTo' in dto && dto.assignedTo === undefined)
            delete data.assignedTo;
        return data;
    }
    create(dto) {
        return this.taskModel.create(this.mapDtoToDocument(dto));
    }
    findAll(filter = {}) {
        return this.taskModel.find(filter);
    }
    findById(id) {
        return this.taskModel.findById(id);
    }
    findByProject(projectId) {
        return this.taskModel.find({ projectId });
    }
    update(id, dto) {
        return this.taskModel.findByIdAndUpdate(id, this.mapDtoToDocument(dto), {
            new: true,
        });
    }
    delete(id) {
        return this.taskModel.findByIdAndDelete(id);
    }
};
exports.TaskRepository = TaskRepository;
exports.TaskRepository = TaskRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskRepository);
//# sourceMappingURL=task.repository.js.map