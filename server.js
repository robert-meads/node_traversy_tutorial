const http = require('http');

const server = http.createServer((req, res) => {
  // Look in chrome dev tools > network tab > header subtab to see if these properties have been set.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello Nodejs</h1>');
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
