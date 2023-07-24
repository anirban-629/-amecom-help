import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    return {
      connected: true,
      message: `MongoDB Connected to host: ${connect.connection.host}`,
    };
  } catch (error) {
    return {
      connected: false,
      error,
    };
  }
};

export default connectDB;
