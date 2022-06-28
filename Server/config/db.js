const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected to:${client.connection.host}`);
  } catch (err) {
    console.log("Error is here",err);
    process.exit(1);
  }
};

module.exports = connectDB;
