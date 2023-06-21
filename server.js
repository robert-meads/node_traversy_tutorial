const http = require('http');
const employees = require('./data/employees.json');

const server = http.createServer((req, res) => {
  if (req.url === '/api/employees') {
    // setHeader, setStatus can be condensed into one function: writeHead as this func takes status and content-type property.
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // We don't need to res.write and res.end. We can send data via res.end.
    res.end(JSON.stringify(employees));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('URL NOT FOUND!'));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
