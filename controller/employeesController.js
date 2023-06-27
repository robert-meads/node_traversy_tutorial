const {
  findAllEmployees,
  findSingleEmployee,
  createEmployee,
} = require('../model/employeesModel');
const { v4: uuidv4 } = require('uuid');
const { getBodyData } = require('../util');

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
  try {
    const body = await getBodyData(req);
    const { first_name, last_name, email, gender } = JSON.parse(body);

    const newEmployee = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
      gender,
    };

    const addedEmployee = await createEmployee(newEmployee);
    console.log('Heres addedEmployee: ', addedEmployee);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(addedEmployee));
  } catch (err) {
    console.log('error: ', err);
  }
}

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  addEmployee,
};
