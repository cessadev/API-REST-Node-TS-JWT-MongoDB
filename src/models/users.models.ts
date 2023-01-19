import {Schema, Types, model, Model} from 'mongoose';
import { User } from '../interfaces/users.interfaces';

// Representation of the properties to be saved in the database.
const usersSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: 'Hello guys'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UsersModel = model('users', usersSchema);
export default UsersModel;