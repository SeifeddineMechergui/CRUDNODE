"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopingController_1 = __importDefault(require("../controllers/shopingController"));
const router = express_1.default.Router();
router.get('/', shopingController_1.default.getAllShoping);
router.put('/list', shopingController_1.default.updateList);
router.post('/', shopingController_1.default.addShoping);
router.put('/:id', shopingController_1.default.updateshopings);
router.delete('/:id', shopingController_1.default.deleteshopings);
exports.default = router;
