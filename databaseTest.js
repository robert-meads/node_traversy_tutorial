const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';

async function connect() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('school');

    const students = db.collection('students');
    const results = students.find();
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

connect();
