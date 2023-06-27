const employees = require('../data/employees.json');
const { writeDataAsyncPromise } = require('../util');

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
  return new Promise(async (resolve, reject) => {
    try {
      employees.push(newEmployee);

      const filepath = `${__dirname}/../data/employeesCopy.json`;
      const newlyCreatedEmployee = await writeDataAsyncPromise(
        filepath,
        employees,
        newEmployee
      );
      resolve(newlyCreatedEmployee);
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  findAllEmployees,
  findSingleEmployee,
  createEmployee,
};
