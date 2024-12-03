const getData = require('./mongodb');

const update = async () => {
  const collection = await getData();
  const data = await collection.deleteMany({name: "rahul"}); 
  console.log(data);

  const result = await collection.find({}).toArray(); // toArray() also create promise
  console.log(result);
};

update();

