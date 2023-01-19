import { Request, Response } from "express";
import handlerHttp from "../utils/error.handler";
import { ReqExtends } from "../interfaces/reqextend.interfaces";

const getEmployees = (req: ReqExtends, res: Response) => {
    try {
        res.send({
            message: 'Only users with JWT',
            user: req.user,
        });
    } catch (error) {
        handlerHttp(res, 'Error_get_items');
    };
};

export { getEmployees };