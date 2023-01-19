import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controllers";

const router = Router();

/**
 * http://localhost:3000/api/auth/register or login [POST]
 */
router.post('/register', registerController);
router.post('/login', loginController);

export { router };