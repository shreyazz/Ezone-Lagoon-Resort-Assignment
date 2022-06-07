const mongoose = require("mongoose");
require("dotenv").config();
let URI = process.env.DB_URI.toString();
const connectToDB = () => {
  mongoose.connect(URI, (err) => {
    if (err) console.log("Database is not connected 🔴");
    else console.log("Database is connected 🟢");
  });
};

module.exports = connectToDB;