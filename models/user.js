const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sumit:sumit786@cluster0.go6grlb.mongodb.net/ejsSeriyan?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then("connected to mongodb")
  .catch((error) => {
    console.log(error);
  });
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});
module.exports = mongoose.model("Users", userSchema);
