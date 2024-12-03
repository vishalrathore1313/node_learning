// mongodb connection and data reading in one file,
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const database = "Vishal-nodedb";

// async function getData() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("first");
//   // let response = await collection.find({name: "srk"}).toArray();
//   // console.log(response);
// }

// getData().then((response)=>{
//     return response.find({name: "virat"}).toArray();
// }).then((data)=>{
//     console.log(data);
// })

// const main = async () => {
//   let data = await getData();
//   data = await data.find({name: "srk"}).toArray(); // toArray() also create promise
//   console.log(data);
// };


// main();

