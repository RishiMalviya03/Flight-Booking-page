const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function getdata(){
    let result= await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    console.log(collection.find({}).toArray());
}
getdata();