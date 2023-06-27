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
  getBodyData,
};
