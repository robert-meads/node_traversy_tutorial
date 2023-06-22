const { findAllEmployees } = require('../model/employeesModel');

async function getAllEmployees(req, res) {
  const employees = await findAllEmployees();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(employees));
}

module.exports = {
  getAllEmployees,
};
