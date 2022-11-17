import {Schema,model} from 'mongoose';

interface IStudent {
    name ? : string,
    age ? : number,
    sex ? : string
}

let StudentSchema = new Schema<IStudent>({
    name: String,
    age: Number,
    sex : String
});

let Student = model<IStudent>('Student',StudentSchema)

export {Student};