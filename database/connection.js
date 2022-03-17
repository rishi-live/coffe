const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log(`Database connected & ready to go...`);
  } catch (error) {
    console.log("Database Connectivity Error", error.message);
    throw new Error(error);
  }
};
