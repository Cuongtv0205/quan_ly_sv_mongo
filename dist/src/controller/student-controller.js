"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
class StudentController {
    constructor() {
        this.getALL = async (req, res) => {
            let students = await student_1.Student.find();
            console.log(students);
            return res.status(200).json(students);
        };
        this.addStudent = async (req, res) => {
            await student_1.Student.insertMany(req.body);
            res.status(201).json({
                message: 'Thêm thành công'
            });
        };
        this.deleteStudent = async (req, res) => {
            let id = req.params.id;
            await student_1.Student.deleteMany({ _id: id });
            return res.status(200).json({
                message: 'Xóa thành công'
            });
        };
        this.editStudent = async (req, res) => {
            let id = req.params.id;
            let newStudent = req.body;
            await student_1.Student.updateOne({ _id: id }, {
                $set: newStudent
            });
            return res.status(200).json({
                message: 'Sửa thành công'
            });
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student-controller.js.map