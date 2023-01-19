import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interfaces";

const storageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const storageModel = model("storages", storageSchema);
export default storageModel;