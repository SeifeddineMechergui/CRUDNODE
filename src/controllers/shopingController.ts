import { Request, Response } from 'express';
import Category, { ShopingDocument } from '../models/shopingModel';
import Shoping from '../models/shopingModel';
const shopingController = {
  getAllShoping: async (req: Request, res: Response) => {
    try {
      const shopings = await Shoping.find();
      res.status(200).json(shopings);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching shopings' });
    }
  },

  addShoping: async (req: Request, res: Response) => {
    try {
      const { montant ,userid} = req.body;
      const newshopings = new Shoping({ montant,userid });
      await newshopings.save();
      res.status(201).json(newshopings);
    } catch (error) {
      res.status(500).json({ message: 'Error adding a shopings' });
    }
  },

  updateshopings: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { montant } = req.body;
      const{userid}=req.body;
      
      const updatedshopings = await Shoping.findByIdAndUpdate(id, {montant ,userid }, { new: true });
      if (updatedshopings) {
        res.status(200).json(updatedshopings);
      } else {
        res.status(404).json({ message: 'shopings not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating the shopings' });
    }
  },

  deleteshopings: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedshopings = await Shoping.findByIdAndDelete(id);
      if (deletedshopings) {
        res.status(200).json({ message: 'shopings deleted successfully' });
      } else {
        res.status(404).json({ message: 'shopings not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting the shopings' });
    }
  } 
  };

export default shopingController;
