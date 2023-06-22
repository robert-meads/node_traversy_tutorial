const http = require('http');
const {
  getAllEmployees,
  getSingleEmployee,
} = require('./controller/employeesController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/employees' && req.method === 'GET') {
    getAllEmployees(req, res);
  } else if (
    req.url.match(/\/api\/employees\/[0-9]+/) &&
    req.method === 'GET'
  ) {
    console.log(req.url.split('/'));
    const id = req.url.split('/')[3];
    getSingleEmployee(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('URL NOT FOUND!'));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
