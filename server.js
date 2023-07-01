const http = require('http');
const {
  getAllEmployees,
  getSingleEmployee,
  addEmployee,
  changeEmployee
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
  } else if (
    req.url.match(/\/api\/employees\/[0-9]+/) &&
    req.method === 'PUT'
  ) {
    const id = req.url.split('/')[3];
    
    // Even though changeEmployee() is an async function, since we don't await it, the worst it can do is just run to completion eventually and we'll have unexpected behavior IF there was more processing that depended on the completion of changeEmployee(). However, this is a standalone 'if statement' code block with no dependents like a .then() in a promise.
    changeEmployee(req, res, id);
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
