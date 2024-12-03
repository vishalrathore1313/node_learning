const User = require("../models/userModel");

exports.createUser = async (request, response) => {
  try {
    const user = new User(request.body);
    const savedUser = await user.save();
    console.log(" User created API");
    response.status(201).send(savedUser);
  } catch (error) {
    console.log(" Error in User created API");
    response.status(400).send({ error: error.message });
  }
};

exports.deleteUser = async (request, response) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);
     console.log("user id=>",request.params.id)
    if (!user) return response.status(404).send({ error: "User not found" });
    response.status(200).send({message:'User deleted Successfully'});
  } catch (error) {
    console.log(" Error in User delete API");
    response.status(400).send({ error: error.message });
  }
};

exports.updateUser = async (request, response) => {
  try {
    const user = await User.findByIdAndUpdate(request.params.id,request.body);
     console.log("user id=>",request.params.id)
    if (!user) return response.status(404).send({ error: "User not found" });
    response.status(200).send({message:'User updated Successfully'});
  } catch (error) {
    console.log(" Error in update API");
    response.status(400).send({ error: error.message });
  }
};

exports.showAll = async (request, response) => {
  try {
    const allUsers = await User.find();
    response.status(200).send(allUsers);
  } catch (error) {
    console.log(" Error in showAll API");
    response.status(400).send({ error: error.message });
  }
};

exports.user = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
         console.log("user id=>",request.params.id)
        if (!user) return response.status(404).send({ error: "User not found" });
        response.status(200).send(user);
      } catch (error) {
        console.log(" Error in user API");
        response.status(400).send({ error: error.message });
      }
};
