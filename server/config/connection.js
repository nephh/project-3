const mongoose = require("mongoose");

// Don't forget we need to change this url when we pick a name!!
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project3",
);

module.exports = mongoose.connection;
