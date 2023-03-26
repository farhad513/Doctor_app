const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Server connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Server error: ${error}`);
  }
};

module.exports = connectDB;
