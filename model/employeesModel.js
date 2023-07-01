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
      reject(err);
    }
  });
}

async function updateEmployee(data, id) {
  return new Promise(async (resolve, reject) => {
    try {
      // find the original employee with matching id
      const originalEmployeeIndex = employees.findIndex(
        (employee) => employee.id === parseInt(id)
      );
      console.log('id: ', originalEmployeeIndex);

      // overwrite original employee data with updated employee data.
      employees[originalEmployeeIndex] = {
        ...data,
      };

      const filepath = `${__dirname}/../data/employeesCopy.json`;
      const updatedEmployee = await writeDataAsyncPromise(
        filepath,
        employees,
        data
      );
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  findAllEmployees,
  findSingleEmployee,
  createEmployee,
  updateEmployee,
};
