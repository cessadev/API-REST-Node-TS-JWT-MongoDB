import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handler";
import { ReqExtends } from "../interfaces/reqextend.interfaces";

const checkJWT = (req: ReqExtends, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        // console.log(isUser);
        if(!isUser) {
            res.status(401);
            res.send({
                message: 'JWT no valid',
            });
        } else {
            req.user = isUser;
            next();
        }
    } catch (error) {
        res.status(400);
        res.send('Session not valid');
    }
}

export { checkJWT };