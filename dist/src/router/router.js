"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_controller_1 = __importDefault(require("../controller/student-controller"));
exports.router = (0, express_1.Router)();
exports.router.get('', student_controller_1.default.getALL);
exports.router.post('/students', student_controller_1.default.addStudent);
exports.router.delete('/delete/:id', student_controller_1.default.deleteStudent);
exports.router.put('/edit/:id', student_controller_1.default.editStudent);
//# sourceMappingURL=router.js.map