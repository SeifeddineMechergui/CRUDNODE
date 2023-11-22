import express from 'express';
import categoryController from '../controllers/shopingController';

const router = express.Router();

router.get('/', categoryController.getAllShoping);
router.put('/list',categoryController.updateList)
router.post('/', categoryController.addShoping);
router.put('/:id', categoryController.updateshopings);
router.delete('/:id', categoryController.deleteshopings);
export default router;
