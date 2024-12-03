
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/Vishal-nodedb');
       console.log("mongoDB connected Successfully");
    }
    catch(error){
        console.error("Error in connecting to mongoDB",error.message);
        process.exit(1);
    }
}


module.exports = connectDB;