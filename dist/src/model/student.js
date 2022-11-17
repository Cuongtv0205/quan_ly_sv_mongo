"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
let StudentSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    sex: String
});
let Student = (0, mongoose_1.model)('Student', StudentSchema);
exports.Student = Student;
//# sourceMappingURL=student.js.map