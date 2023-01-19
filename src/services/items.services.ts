import { Items } from "../interfaces/items.interfaces";
import itemsModel from "../models/items.models";

const postItemsServices = async (items: Items) => {
    const responsePost = await itemsModel.create(items);
    return responsePost;
};

const getItemsServices = async () => {
    const  responseGet = await itemsModel.find({});
    return responseGet;
};

const getItemsByIdServices = async (id: String) => {
    const responseGetById = await itemsModel.findOne({_id: id});
    return responseGetById;
};

const putItemsServices = async (id: String, data: Items) => {
    const responsePut = await itemsModel.findOneAndUpdate({_id: id}, data, {new: true});
    return responsePut;
};

const deleteItemsServices = async (id: String) => {
    const responseDelete = await itemsModel.deleteOne({_id: id});
    return responseDelete;
};

export {getItemsServices, getItemsByIdServices, postItemsServices, putItemsServices, deleteItemsServices};