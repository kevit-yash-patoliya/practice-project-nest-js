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
exports.TaskSchema = exports.Task = exports.TaskPriority = exports.TaskStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["TODO"] = "todo";
    TaskStatus["IN_PROGRESS"] = "in_progress";
    TaskStatus["REVIEW"] = "review";
    TaskStatus["COMPLETED"] = "completed";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "low";
    TaskPriority["MEDIUM"] = "medium";
    TaskPriority["HIGH"] = "high";
    TaskPriority["URGENT"] = "urgent";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
let Task = class Task {
    projectId;
    title;
    description;
    status;
    priority;
    createdBy;
    assignedTo;
    dueDate;
    archived;
    completed;
    order;
    labels;
};
exports.Task = Task;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Project',
        required: true,
        index: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Task.prototype, "projectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: '',
    }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: TaskStatus,
        default: TaskStatus.TODO,
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: TaskPriority,
        default: TaskPriority.MEDIUM,
    }),
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Task.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Task.prototype, "assignedTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
    }),
    __metadata("design:type", Date)
], Task.prototype, "dueDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Task.prototype, "archived", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Task.prototype, "completed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        default: [],
    }),
    __metadata("design:type", Array)
], Task.prototype, "labels", void 0);
exports.Task = Task = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
    })
], Task);
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task);
//# sourceMappingURL=task.schema.js.map