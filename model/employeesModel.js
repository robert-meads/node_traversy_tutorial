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

module.exports = {
  findAllEmployees,
  findSingleEmployee,
};
