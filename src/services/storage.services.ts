import { Storage } from "../interfaces/storage.interfaces";
import storageModel from "../models/storage.models";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await storageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };