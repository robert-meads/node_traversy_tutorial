const http = require('http');
const { getAllEmployees } = require('./controller/employeesController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/employees' && req.method === 'GET') {
    getAllEmployees(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('URL NOT FOUND!'));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
