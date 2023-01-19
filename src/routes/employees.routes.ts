import { Router } from "express";
import { getEmployees, getEmployeeById, postEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controllers";
import { logMiddlewares } from "../middlewares/log.middlewares";

const router = Router();
/**
 * http://localhost/api/employees [GET]
 */
router.get('/', getEmployees);

router.get('/:id', logMiddlewares, getEmployeeById);

router.post('/', postEmployees);

router.put('/:id', updateEmployees);

router.delete('/:id', deleteEmployees);


export { router };