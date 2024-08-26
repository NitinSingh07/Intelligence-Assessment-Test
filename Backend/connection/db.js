const mongoose = require("mongoose");
const url = process.env.MONGOURL;
const connect = async () => {
  try {
    const connecttion = await mongoose.connect("mongodb+srv://cogradoffice:fUK2UwSoJkKZlDvL@cluster0.irvg5.mongodb.net/Intelligence-Assesment");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

connect();
