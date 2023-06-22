const employees = require('../data/employees.json');

function findAllEmployees() {
  return new Promise((resolve, reject) => resolve(employees));
}

function findSingleEmployee(id) {
  return new Promise((resolve, reject) => {
    console.log('Type of id is: ', typeof id);
    console.log('inside findSingleEmployee', '. Id is: ', id);
    const employee = employees.find((employee) => {
      //   console.log(employee, employee.id);
      return parseInt(id) === employee.id;
    });
    console.log(employee);
    resolve(employee);
  });
}

module.exports = {
  findAllEmployees,
  findSingleEmployee,
};
