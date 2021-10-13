const { MongoClient } = require("mongodb");

const { v4: uuidv4 } = require("uuid");

/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://mongodbtestdavid:ZADnAAAzbRiFvNxfvrQvXbHHaSQuPyUrKHuACk8IbaL27BTHmYDGKjnhwqilnmndhjEDPVMng5GhV3w5gVNPFw==@mongodbtestdavid.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtestdavid@";
const client = new MongoClient(url);

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collectionSaldos = database.collection("saldos");

 
   // let query = {_id:req.params.id}
  //let obj = await collectionSaldos.findOne({ _no_Cuenta: cuenta_origen });
  let saldo = await collectionSaldos.findOne({_no_Cuenta:req.body._id});
  //let user = await collectionUser.findOne({_id:account._no_id_usuario});


  return context.res = {
    status: 200,
    body: {
     ...saldo
        

    },
  };
};