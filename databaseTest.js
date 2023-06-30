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

    // find Huey.
    // const huey = await students.findOne({ name: 'Huey' });
    // console.log('Here is huey ', huey);

    // insert God with age 1000.
    // await students.insertOne({ name: 'God', age: 1000 });
    // const god = await students.findOne({ name: 'God' });
    // console.log('Here is god ', god);

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

connect();
