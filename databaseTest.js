const MongoClient = require('mongodb').MongoClient;

// The latest mongodb nodejs driver:
// use command: 'npm list monogodb'
// I have mongodb@5.6.0 version.
// This version uses promises and doesn't use callbacks it seems. Which is why the code below seems to not work.
// I can be wrong.

// async function startMongodb() {
//   try {
//     await MongoClient.connect('mongodb://localhost:27017', function (err, db) {
//       if (err) {
//         throw err;
//       }

//       console.log('hello from mongodb!');
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

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
