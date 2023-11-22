"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./configs/db");
const express_1 = __importDefault(require("express"));
const ShopingRoutes_1 = __importDefault(require("./routes/ShopingRoutes"));
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use(express_1.default.json());
app.use('/shoping', ShopingRoutes_1.default);
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Shoping Service running on port ${PORT}`);
});
