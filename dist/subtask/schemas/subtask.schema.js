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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTaskSchema = exports.SubTask = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("../../task/schemas/task.schema");
let SubTask = class SubTask {
    taskId;
    title;
    description;
    status;
    priority;
    assignedTo;
    createdBy;
    dueDate;
    completed;
    order;
};
exports.SubTask = SubTask;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Task',
        required: true,
        index: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubTask.prototype, "taskId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], SubTask.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: '',
    }),
    __metadata("design:type", String)
], SubTask.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: task_schema_1.TaskStatus,
        default: task_schema_1.TaskStatus.TODO,
    }),
    __metadata("design:type", String)
], SubTask.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: task_schema_1.TaskPriority,
        default: task_schema_1.TaskPriority.MEDIUM,
    }),
    __metadata("design:type", String)
], SubTask.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubTask.prototype, "assignedTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SubTask.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], SubTask.prototype, "dueDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], SubTask.prototype, "completed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], SubTask.prototype, "order", void 0);
exports.SubTask = SubTask = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
    })
], SubTask);
exports.SubTaskSchema = mongoose_1.SchemaFactory.createForClass(SubTask);
//# sourceMappingURL=subtask.schema.js.map