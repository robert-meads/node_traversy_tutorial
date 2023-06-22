const { findAllEmployees, findSingleEmployee } = require('../model/employeesModel');

async function getAllEmployees(req, res) {
  const employees = await findAllEmployees();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(employees));
}

async function getSingleEmployee(req, res, id) {
  const employee = await findSingleEmployee(id);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(employee));
}

module.exports = {
  getAllEmployees,
  getSingleEmployee,
};
