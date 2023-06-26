const {
  findAllEmployees,
  findSingleEmployee,
  createEmployee,
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

async function addEmployee(req, res) {
  // Assume we got data from request's body.
  const newEmployee = {
    id: uuidv4(),
    first_name: 'Bobs',
    last_name: 'Burgers',
    email: 'tina_is_crazy@yahoo.com',
    gender: 'burger',
  };

  const addedEmployee = await createEmployee(newEmployee);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(addedEmployee));
}

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  addEmployee,
};
