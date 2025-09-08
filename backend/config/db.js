import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB connection error", error.message);
    process.exit(1);
  }
};

export default ConnectDB;
