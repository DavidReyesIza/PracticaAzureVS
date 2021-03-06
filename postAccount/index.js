const { MongoClient } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://mongodbtestdavid:ZADnAAAzbRiFvNxfvrQvXbHHaSQuPyUrKHuACk8IbaL27BTHmYDGKjnhwqilnmndhjEDPVMng5GhV3w5gVNPFw==@mongodbtestdavid.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtestdavid@";
const client = new MongoClient(url);

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collectionAccount = database.collection("cuentas");
  const collectionUser = database.collection("usuarios");
  const body = {
    _id: uuidv4(),
      ...req.body}

  let dataAccount = {
    _id: uuidv4(),
    _no_id_usuario: req.body._id
 }
  let account = await collectionAccount.insertOne(dataAccount);


  //let {nombre_completo, rol} = user;
  return context.res = {
    status: 200,
    body: {
      account
        

    },
  };
};