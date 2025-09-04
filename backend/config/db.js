import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/BayMax.io`
    );
    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB connection error", error.message);
    process.exit(1);
  }
};

export default ConnectDB;
