const fs = require('fs');

// Look at fs/promise vs fs modules.

function writeToFileAsync(filepath, data, resolve, employee) {
  // fs.writeFile is an async function using callbacks. Behind the scenes, it writes to files by not blocking js engine.

  // Conjecture below:
  // Maybe bts, writeFile() is a stream that uses eventemitters to write chunk by chunk to a file.
  // It recognizes 'data' event to write a chunk. writeFile() completes when 'end' event is signaled.
  // This is all done async. When writeFile is done, it runs the error callback.
  // Conjecture above:

  fs.writeFile(filepath, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.log(`Error writing to ${filepath}.`);
    }
    // file written successfully
    console.log('Finished writing to ', filepath);
    resolve(employee);
  });
}

module.exports = {
  writeToFileAsync,
};
