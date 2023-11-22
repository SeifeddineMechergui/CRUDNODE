import mongoose, { Document, Schema } from 'mongoose';
import { ShopingItemDocument } from './ShoppingItem';

export interface ShopingDocument extends Document {

   montant:String,
   product:Array<ShopingItemDocument>,
   userid:String,
    _id: string;
}

const shopingSchema = new Schema<ShopingDocument>({
    montant: {
    type: String,
    required: true,
  },
  userid:{
    type:String,required:true,unique:true
  }
});

const Shoping = mongoose.model<ShopingDocument>('Shoping', shopingSchema);

export default Shoping;
