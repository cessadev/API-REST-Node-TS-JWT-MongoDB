import {Schema, Types, model, Model} from 'mongoose';
import { Items } from '../interfaces/items.interfaces';

// Representation of the properties to be saved in the database.
const itemsSchema = new Schema<Items>(
    {
        name: {
            type: String,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const itemsModel = model('items', itemsSchema);
export default itemsModel;