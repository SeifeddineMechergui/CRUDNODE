"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopingModel_1 = __importDefault(require("../models/shopingModel"));
const ShoppingItem_1 = __importDefault(require("../models/ShoppingItem"));
const shopingController = {
    getAllShoping: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const shopings = yield shopingModel_1.default.find();
            res.status(200).json(shopings);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching shopings' });
        }
    }),
    addShoping: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { montant, userid } = req.body;
            const newshopings = new shopingModel_1.default({ montant, userid });
            yield newshopings.save();
            res.status(201).json(newshopings);
        }
        catch (error) {
            res.status(500).json({ message: 'Error adding a shopings' });
        }
    }),
    updateshopings: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { montant } = req.body;
            const { userid } = req.body;
            const updatedshopings = yield shopingModel_1.default.findByIdAndUpdate(id, { montant, userid }, { new: true });
            if (updatedshopings) {
                res.status(200).json(updatedshopings);
            }
            else {
                res.status(404).json({ message: 'shopings not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error updating the shopings' });
        }
    }),
    deleteshopings: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deletedshopings = yield shopingModel_1.default.findByIdAndDelete(id);
            if (deletedshopings) {
                res.status(200).json({ message: 'shopings deleted successfully' });
            }
            else {
                res.status(404).json({ message: 'shopings not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error deleting the shopings' });
        }
    }),
    addList: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { productPrice } = req.body;
            const ShoppingItems = new ShoppingItem_1.default({ productPrice });
            yield ShoppingItems.save();
            res.status(201).json(ShoppingItems);
        }
        catch (error) {
            res.status(500).json({ message: 'Error adding a list' });
        }
    }),
};
exports.default = shopingController;
