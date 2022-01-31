// Mongo
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

mongoose.connection.on("open", () => console.log("MongoDB connection established!"));

module.exports = mongoose;
