const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // They use this line at the original course, but it was not working for me. I will keep this commented just for information purpose.
        // useFindAndModify: true
    });
    console.log("DB connected");
  } catch (error) {
    console.log(error);
    process.exit(1); // Stop the app
  }
};

module.exports = connectDB;
