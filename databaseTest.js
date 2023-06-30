const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';

// Be careful if collection is huge. This is a costly op.
async function printAll(cursor) {
  console.log(await cursor.toArray());
}

async function connect() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('school');

    const students = db.collection('students');
    const results = students.find();
    // await printAll(results);

    // find Huey. .find() returns a cursor that you need to .toArray() to convert to something I can print in console. .findOne() returns something I don't need to call .toArray().
    const huey = await students.findOne({ name: 'Huey' });
    console.log('Here is huey ', huey);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

connect();
