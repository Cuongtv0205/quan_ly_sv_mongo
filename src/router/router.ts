import {Router} from "express";
import studentController from "../controller/student-controller";

export const router = Router();

router.get('',studentController.getALL);
router.post('/students',studentController.addStudent);
router.delete('/delete/:id',studentController.deleteStudent);
router.put('/edit/:id',studentController.editStudent);