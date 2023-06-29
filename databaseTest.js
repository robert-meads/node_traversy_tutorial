const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';

async function connect() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('employees');
    console.log('Hello from mongodb.');
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

connect();
