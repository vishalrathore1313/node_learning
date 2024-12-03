const express = require("express");
const dbconnect = require("./mongodb");
const app = express();

app.use(express.json());

app.get("/", async (_request, response) => {
  let data = await dbconnect();
  let result = await data.find().toArray();
  console.log(result);
  response.send(result);
});

app.post("/insert", async (request, response) => {
  // console.log(request.body);
  let data = await dbconnect();
  data.insertOne(request.body);
  response.send(result);
  // let result = await data.find().toArray();
  // console.log(result);
});
app.put("/:name", async (request, response) => {
  let data = await dbconnect();
  await data.updateOne({name: request.params.name},{$set: request.body})
   let result = await data.find().toArray();
  response.send(result);
});

app.delete("/:name", async (request, response) => {
  let data = await dbconnect();
  await data.deleteOne({name: request.params.name})
   let result = await data.find().toArray();
  response.send(result);
});



app.listen(5000);
