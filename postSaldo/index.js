const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://mongodbtestdavid:ZADnAAAzbRiFvNxfvrQvXbHHaSQuPyUrKHuACk8IbaL27BTHmYDGKjnhwqilnmndhjEDPVMng5GhV3w5gVNPFw==@mongodbtestdavid.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtestdavid@";
const client = new MongoClient(url);

let resetList = 
  {
    _id: uuidv4(),
    _no_Cuenta: "146bdda3-49e4-4d08-9c5b-93e338116e7c",
    saldo: 200,
   
  }


module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collection = database.collection("saldos");

  await collection.insertOne(resetList);

  return (context.res = {
    status: 200,
    body: "Initialization successful",
  });
};