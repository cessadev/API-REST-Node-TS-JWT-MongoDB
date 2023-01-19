import { Router } from "express";
import { getFile } from "../controllers/upload.controllers";
import multerMiddleware from "../middlewares/file.middlewares";
import { checkJWT } from "../middlewares/session.middlewares";

const router = Router();
/**
 * http://localhost:3000/api/upload [POST]
 */
router.post('/', checkJWT, multerMiddleware.single("myfile"), getFile);

export { router };