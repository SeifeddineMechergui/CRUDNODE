import mongoose, { Document, Schema } from 'mongoose';

export interface ShopingDocument extends Document {

   montant:String,
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

const Shoping = mongoose.model<ShopingDocument>('Category', shopingSchema);

export default Shoping;
