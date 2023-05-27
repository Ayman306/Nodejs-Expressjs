const mongoose = require("mongoose");
mongoose.connect("mongobd://localhost:27017/CruDB", () => {
  console.log("connected");
}),
  (err) => {
    console.log("not connected");
  };
module.exports = mongoose;
