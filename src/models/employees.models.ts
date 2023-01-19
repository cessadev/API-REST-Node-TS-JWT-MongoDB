import {Schema, Types, model, Model} from 'mongoose';
import { Employees } from '../interfaces/employees.interfaces';

// Representation of the properties to be saved in the database.
const employeesSchema = new Schema<Employees>(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ['male','female','other'],
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const employeesModel = model('employees', employeesSchema);
export default employeesModel;