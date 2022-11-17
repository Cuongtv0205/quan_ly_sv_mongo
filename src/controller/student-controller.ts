import {Student} from "../model/student";
import {Request, Response} from "express";


class StudentController {
    getALL = async (req: Request, res: Response) => {
        let students = await Student.find();
        console.log(students);
        return res.status(200).json(students);
    }
    addStudent = async (req: Request, res: Response) => {
        await Student.insertMany(req.body);
        res.status(201).json({
            message: 'Thêm thành công'
        })
    }

    deleteStudent = async (req: Request, res: Response) => {
        let id = req.params.id
        await Student.deleteMany({_id:id});
        return res.status(200).json({
            message: 'Xóa thành công'
        })
    }

    editStudent = async (req: Request, res: Response) => {
        let id = req.params.id
        let newStudent = req.body;
        await Student.updateOne(
            {_id: id},
            {
                $set: newStudent
            }
        )
        return res.status(200).json({
            message: 'Sửa thành công'
        });
    }

}

export default new StudentController();