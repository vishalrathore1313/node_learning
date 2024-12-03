const getData = require('./mongodb');

const insert = async () => {
  const collection = await getData();
  const data = await collection.insertMany([
    {
      name: 'rahul',
      city: 'ujjain'
  },
  {
    name: 'ajay',
    city: 'goa'
}
  ]); 
  console.log(data);

  const result = await collection.find({}).toArray(); // toArray() also create promise
  console.log(result);
};

insert();

