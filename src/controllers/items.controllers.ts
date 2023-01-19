import { Request, Response } from "express";
import { getItemsServices, getItemsByIdServices, postItemsServices, putItemsServices, deleteItemsServices } from "../services/items.services";
import handlerHttp from "../utils/error.handler";

const getItems = async (req: Request, res: Response) => {
    try {
        const responseGet = await getItemsServices();
        res.status(200).send(responseGet);
    } catch (error) {
        handlerHttp(res, 'Error_get_items');
    };
};

const getItemsById = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseGetById = await getItemsByIdServices(id);
        const data = responseGetById ? responseGetById: 'Not records with that id';
        res.send(data);
    } catch (error) {
        handlerHttp(res, 'Error_get_item_id');
    };
};

const postItems = async ({body}: Request, res: Response) => {
    try {
        const responsePost = await postItemsServices(body);
        res.status(200).send(responsePost);
    } catch (error) {
        handlerHttp(res, 'Error_post_item_');
    };
};

const updateItems = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const responsePut = await putItemsServices(id, body);
        res.status(200).send(responsePut);
    } catch (error) {
        handlerHttp(res, 'Error_update_item');
    };
};

const deleteItems = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseDelete = await deleteItemsServices(id);
        res.status(204).send(responseDelete);
    } catch (error) {
        handlerHttp(res, 'Error_delete_item');
    };
};


export {getItems, getItemsById, postItems, updateItems, deleteItems};