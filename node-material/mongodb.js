const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "Vishal-nodedb";

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("first");
}

module.exports = getData;