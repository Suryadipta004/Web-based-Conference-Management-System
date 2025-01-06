const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the following two lines:
      // useFindAndModify: false,
      // useCreateIndex: true
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
