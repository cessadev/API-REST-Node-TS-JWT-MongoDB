import { Request, Response } from "express";
import { ReqExtends } from "../interfaces/reqextend.interfaces";
import { Storage } from "../interfaces/storage.interfaces";
import { registerUpload } from "../services/storage.services";
import handlerHttp  from "../utils/error.handler";

const getFile = async (req: ReqExtends, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "Error_get_upload");
  }
};

export { getFile };