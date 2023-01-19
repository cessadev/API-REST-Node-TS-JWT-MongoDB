import { Employees } from "../interfaces/employees.interfaces";
import employeesModel from "../models/employees.models";

const postEmployyesServices = async (employee: Employees) => {
    const responsePost = await employeesModel.create(employee);
    return responsePost;
};

const getEmployeesServices = async () => {
    const  responseGet = await employeesModel.find({});
    return responseGet;
};

const getEmployeesByIdServices = async (id: String) => {
    const responseGetById = await employeesModel.findOne({_id: id});
    return responseGetById;
};

const putEmployeesServices = async (id: String, data: Employees) => {
    const responsePut = await employeesModel.findOneAndUpdate({_id: id}, data, {new: true});
    return responsePut;
};

const deleteEmployeesServices = async (id: String) => {
    const responseDelete = await employeesModel.deleteOne({_id: id});
    return responseDelete;
};

export {postEmployyesServices, getEmployeesServices, getEmployeesByIdServices, putEmployeesServices, deleteEmployeesServices};