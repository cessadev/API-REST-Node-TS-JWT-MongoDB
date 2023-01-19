import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";

const registerController = async ({body}: Request, res: Response) => {
    const responseRegister = await registerNewUser(body);
    res.send(responseRegister);
};

const loginController = async ({body}: Request, res: Response) => {
    const {email, password} = body;
    const responseLogin = await loginUser({email, password});

    if(responseLogin === 'Password incorrect') {
        res.status(403);
        res.send(responseLogin);
    } else {
        res.send(responseLogin);
    }
};

export { registerController, loginController };