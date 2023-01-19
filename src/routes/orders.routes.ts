import { Router } from "express";
import { getEmployees } from "../controllers/orders.controllers";
import { checkJWT } from "../middlewares/session.middlewares";

const router = Router();
/**
 * http://localhost:3000/api/orders [GET]
 */
router.get('/', checkJWT, getEmployees);

export { router }