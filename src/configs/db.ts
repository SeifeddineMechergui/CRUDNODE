import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = "mongodb+srv://seifeddine:B85mToSBEVYdGF6k@cluster0.o4udqpk.mongodb.net/shoping-service";
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
