const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';

async function connect() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('school');
    // console.log(`database is ${db.databaseName}`);
    // const collections = await db.collections();
    // collections.forEach((collection) => {
    //   console.log(`Collection ${collection.collectionName}`);
    // });

    const students = db.collection('students');
    // .find() returns a cursor which is an iterable containing documents.
    const results = students.find();
    // console.log('results: ', await results.toArray());
    // console.table(await results.toArray());

    // how to move to next document in collection via the cursor, results.
    // let test = await results.hasNext();
    // let i = 0;
    // while (test) {
    //   console.log(test, i++);
    //   console.log(await results.next());
    //   test = await results.hasNext();
    // }
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

connect();
