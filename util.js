const fsp = require('fs').promises;

async function writeDataAsyncPromise(filename, content, newEmployee) {
  // I assumed fsp.writeFile had the same arguments as the non-promise version. It doesn't take a callback. It resolves with no argument.
  await fsp.writeFile(filename, JSON.stringify(content), 'utf8');
  return newEmployee;
}

function getBodyData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        console.log('Heres the body ', body);
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  writeDataAsyncPromise,
  getBodyData,
};
