// Need to make employees a modifiable array b/c array.filter operates on shallow copy, shallow copy
// being the original array. If it were const, our array would not filter if we used array.filter().
let employees = require('../data/employees.json');
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

function deleteEmployee(id) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(employees[id - 1]);
      toBeDeleted = employees[id - 1];
      const newEmployees = employees.filter(
        (employee) => employee.id !== parseInt(id)
      );
      console.log(newEmployees[id - 1]);
      const filepath = `${__dirname}/../data/employeesCopy.json`;
      const deletedEmployee = await writeDataAsyncPromise(
        filepath,
        newEmployees,
        toBeDeleted
      );
      resolve(deletedEmployee);
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
  deleteEmployee,
};

// to do:
// fix up the ugly 'id - 1' bullshiet.
// add a function to check if id of employee exists in controller.
