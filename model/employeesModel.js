const employees = require('../data/employees.json');

function findAllEmployees() {
  return new Promise((resolve, reject) => resolve(employees));
}

function findSingleEmployee(id) {
  return new Promise((resolve, reject) => {
    const employee = employees.find((employee) => {
      return parseInt(id) === employee.id;
    });
    resolve(employee);
  });
}

function createEmployee(newEmployee) {
  return new Promise((resolve, reject) => {
    employees.push(newEmployee);

    const filepath = `${__dirname}/../data/employeesCopy.json`;
  });
}

module.exports = {
  findAllEmployees,
  findSingleEmployee,
  createEmployee,
};
