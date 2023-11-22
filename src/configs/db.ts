import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = "link mataa mongodb mtaek ";
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
