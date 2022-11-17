import { Request, Response } from "express";
declare class StudentController {
    getALL: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addStudent: (req: Request, res: Response) => Promise<void>;
    deleteStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: StudentController;
export default _default;
