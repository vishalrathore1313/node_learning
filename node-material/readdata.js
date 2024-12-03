const getData = require('./mongodb');

const main = async () => {
  let data = await getData();
  data = await data.find({}).toArray(); // toArray() also create promise
  console.log(data);
};


main();

