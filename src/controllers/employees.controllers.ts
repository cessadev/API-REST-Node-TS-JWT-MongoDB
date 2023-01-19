import { Request, Response } from "express";
import { postEmployyesServices, getEmployeesServices, getEmployeesByIdServices, putEmployeesServices, deleteEmployeesServices } from "../services/employees.services";
import handlerHttp from "../utils/error.handler";

const getEmployees = async (req: Request, res: Response) => {
    try {
        const responseGet = await getEmployeesServices();
        res.status(200).send(responseGet);
    } catch (error) {
        handlerHttp(res, 'Error_get_employees');
    };
};

const getEmployeeById = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseGetById = await getEmployeesByIdServices(id);
        const data = responseGetById ? responseGetById: 'Not records with that id';
        res.send(data);
    } catch (error) {
        handlerHttp(res, 'Error_get_emploemployees_id');
    };
};

const postEmployees = async ({body}: Request, res: Response) => {
    try {
        const responsePost = await postEmployyesServices(body);
        res.status(200).send(responsePost);
    } catch (error) {
        handlerHttp(res, 'Error_post_employees_');
    };
};

const updateEmployees = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const responsePut = await putEmployeesServices(id, body);
        res.status(200).send(responsePut);
    } catch (error) {
        handlerHttp(res, 'Error_update_employees');
    };
};

const deleteEmployees = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const responseDelete = await deleteEmployeesServices(id);
        res.status(204).send(responseDelete);
    } catch (error) {
        handlerHttp(res, 'Error_delete_employees');
    };
};

export {getEmployees, getEmployeeById, postEmployees, updateEmployees, deleteEmployees};