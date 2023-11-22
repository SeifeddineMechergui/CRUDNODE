import express from 'express';
import shopingController from '../controllers/shopingController';

const router = express.Router();

router.get('/', shopingController.getAllShoping);
router.post('/', shopingController.addShoping);
router.put('/:id', shopingController.updateshopings);
router.delete('/:id', shopingController.deleteshopings);
export default router;
