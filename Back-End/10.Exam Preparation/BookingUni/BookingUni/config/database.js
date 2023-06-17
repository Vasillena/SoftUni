const mongoose = require("mongoose");

// TODO: Change database according to assignment
const CONNECTION_STRING = "mongodb://localhost:27017/booking-uni";

module.exports = async (app) => {
  try {
    mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
