import { NextFunction, Request, Response } from "express";

const logMiddlewares = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header['user-agent'];
    next();
};

export { logMiddlewares };