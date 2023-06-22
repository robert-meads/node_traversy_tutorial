const http = require('http');
const employees = require('./data/employees.json');

const server = http.createServer((req, res) => {
  if (req.url === '/api/employees' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(employees));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('URL NOT FOUND!'));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
