// db.ts

import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const url: string = process.env.MONGODB_URL as string;
    await mongoose.connect(url);
    // await mongoose.connect(url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   // Other options...
    // });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
