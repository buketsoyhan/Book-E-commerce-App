import mongoose from "mongoose";

const connectMongo = async () => {
    console.log(process.env.MONGODB_URI, "message")
  try {
    const { connection } =await mongoose.connect(process.env.MONGODB_URI);

    if (connection.readyState == 1) {
      console.log("Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
