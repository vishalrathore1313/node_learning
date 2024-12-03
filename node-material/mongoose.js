const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/Vishal-nodedb");
  const productSchema = new mongoose.Schema({
    name: String,
  });
  const productModel = mongoose.model("firsts", productSchema);
  let data = new productModel({
    name: "ravi",
    car: "ferrari",
  });
  let result = await data.save();
  console.log(result);
};

main();
