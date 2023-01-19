import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface ReqExtends extends Request {
    user?: JwtPayload | { id: string };
}