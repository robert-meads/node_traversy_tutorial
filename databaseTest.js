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

// Mongodb mongo shell tutorial:

// db.students.insertOne({
    //   name: 'Alica',
    //   age: 14,
    //   extracuriccular: ['soccer', 'chinese', 'piano'],
    //   grades: {
    //     math: 'A',
    //     english: 'B-',
    //     pe: 'C+',
    //   },
    // });

    // db.students.insertMany([
    //   {
    //     name: 'Oliver',
    //     age: 9,
    //     extracuriccular: ['basketball', 'spanish', 'swimming'],
    //   },
    //   {
    //     name: 'Marisa',
    //     age: 15,
    //     extracuriccular: ['spelling', 'cooking', 'puzzles'],
    //   },
    //   {
    //     name: 'Bobby',
    //     age: 18,
    //     extracuriccular: ['eating', 'video games', 'telling jokes'],
    //   },
    // ]);

    // db.students.find().sort({ name: 1 });

    // db.students.find().forEach(function (student) {
    //   print("Hi, I'm " + student.name + '. I am ' + student.age);
    // });

    // // Note: If you add {age: '16'}, you can't do math to age unless you convert it to numeric.
    // // However, if you add {age: 16}, you can do math with it like $inc operator.
    // // This is why updating Marisa's age fails, age contains a string numeric, not a numeric.
    // db.students.updateOne({ name: 'Marisa' }, { $inc: { age: -6 } });
    // db.students.find({ name: 'Marisa' });

    // // Update by replacing whole object.
    // db.students.replaceOne({ age: 1 }, { name: 'Huey', age: 1 });

    // // Update field but if no match, do nothing.
    // // Change <non-existent in our db> person to age of 1000.
    // db.students.updateOne({ name: 'God' }, { $set: { age: 1000 } });

    // // Update field but if no match, insert.
    // // Don't assume passing 1 or -1 or true or false. Read the docs.
    // db.students.updateOne(
    //   { name: 'God' },
    //   { $set: { age: 1000 } },
    //   { upsert: true }
    // );

    // // Update field using $set operator
    // // Change Bobby's age to 12.
    // db.students.updateOne({ name: 'Bobby' }, { $set: { age: 12 } });

    // // delete God
    // db.students.deleteOne({name: 'God'})