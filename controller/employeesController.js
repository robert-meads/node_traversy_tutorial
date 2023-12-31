const {
  findAllEmployees,
  findSingleEmployee,
} = require('../model/employeesModel');
const { v4: uuidv4 } = require('uuid');

async function getAllEmployees(req, res) {
  const employees = await findAllEmployees();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(employees));
}

async function getSingleEmployee(req, res, id) {
  const employee = await findSingleEmployee(id);
  if (employee) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(employee));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(`Id: ${id} not found!`));
  }
}

module.exports = {
  getAllEmployees,
  getSingleEmployee,
};
