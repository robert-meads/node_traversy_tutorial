const http = require('http');
const {
  getAllEmployees,
  getSingleEmployee,
  addEmployee,
} = require('./controller/employeesController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/employees' && req.method === 'GET') {
    getAllEmployees(req, res);
  } else if (
    req.url.match(/\/api\/employees\/[0-9]+/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3];
    getSingleEmployee(req, res, id);
  } else if (req.url === '/api/employees' && req.method === 'POST') {
    addEmployee(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('URL NOT FOUND!'));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// How to check where you are:
// console.log(`Current working directory: ${process.cwd()}`);
// console.log(`Directory name is ${__dirname}`);
// console.log(`Filename is ${__filename}`);
