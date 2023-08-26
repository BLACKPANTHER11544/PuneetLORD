import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`SuccessFully Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

export default connectDB;
