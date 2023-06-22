const employees = require('../data/employees.json');

function findAllEmployees() {
  return new Promise((resolve, reject) => resolve(employees));
}

module.exports = {
  findAllEmployees,
};
