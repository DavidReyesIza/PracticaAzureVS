const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://mongodbtestdavid:ZADnAAAzbRiFvNxfvrQvXbHHaSQuPyUrKHuACk8IbaL27BTHmYDGKjnhwqilnmndhjEDPVMng5GhV3w5gVNPFw==@mongodbtestdavid.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtestdavid@";
const client = new MongoClient(url);

let resetList = [
  {
    _id: uuidv4(),
    _no_Cuenta: "c60a0bac-2a7f-44b2-8f84-1deb7997b82b1",
    saldo: 2000,
   
  },
  {
    _id: uuidv4(),
    _no_Cuenta: "c60a0bac-2a7f-44b2-8f84-1deb7997b82b2",
    saldo: 2000,
   
  },
  {
    _id: uuidv4(),
    _no_Cuenta: "c60a0bac-2a7f-44b2-8f84-1deb7997b82b3",
    saldo: 2000,
   
  },
 




];

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collection = database.collection("saldos");
  await collection.deleteMany({});
  await collection.insertMany(resetList);

  return (context.res = {
    status: 200,
    body: "Initialization successful",
  });
};