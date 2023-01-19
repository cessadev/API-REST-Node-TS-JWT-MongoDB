import { Router } from "express";
import { getItems, getItemsById, postItems, updateItems, deleteItems } from "../controllers/items.controllers";
import { logMiddlewares } from "../middlewares/log.middlewares";


const router = Router();
/**
 * http://localhost/api/items [GET]
 */
router.get('/', getItems);

router.get('/:id', logMiddlewares, getItemsById);

router.post('/', postItems);

router.put('/:id', updateItems);

router.delete('/:id', deleteItems);


export { router };