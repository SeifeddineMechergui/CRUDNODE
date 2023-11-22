import { Request, Response } from 'express';
import Category from '../models/shopingModel';
import Shoping from '../models/shopingModel';
// Define your data model
interface ShoppingItem {
    _id: string;
    productPrice: string;
  }
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
  },

    updateList : async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { montant } = req.body;
      const { userid } = req.body;
  
      // Fetch the shopping item
      const shoppingItem: ShoppingItem | null = await Shoping.findById(id);
  
      if (!shoppingItem) {
        return res.status(404).json({ message: 'Shopping item not found' });
      }
  
      // Assuming productPrice is a property of the shopping item
      const productPrice = parseFloat(shoppingItem.productPrice.toString());
      const parsedMontant = parseFloat(montant.toString());
  
      // Check if the parsed values are valid numbers
      if (isNaN(productPrice) || isNaN(parsedMontant)) {
        return res.status(400).json({ message: 'Invalid montant or product price' });
      }
  
      // Compare parsedMontant with productPrice
      if (parsedMontant > productPrice) {
        // Update the shopping item
        const updatedList = await Shoping.findByIdAndUpdate(
          id,
          { montant, userid },
          { new: true }
        );
  
        // Return the updated item and the difference
        return res.status(200).json({
          updatedList,
          difference: parsedMontant - productPrice,
        });
      } else {
        return res.status(400).json({ message: 'Montant should be greater than product price' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating the shopping item' });
    }
  }
  
  
  












};

export default shopingController;
