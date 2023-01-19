import { Response } from "express"

const handlerHttp = (res: Response, error: string) => {
    res.sendStatus(500).json({
        message: 'Something goes wrong'
    });
    res.send(error);
};

export default handlerHttp;