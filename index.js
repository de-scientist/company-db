import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to create a new department in the database
async function createDepartment(ID, departmentName, location) {
  const department = await prisma.department.create({
    data: {
      ID: ID,
      DepartmentName: departmentName,
      Location: location,
    },
  });
  return department;
}

// Main function to insert multiple records
async function main() {
  const newDepartment = await createDepartment("DPT001", "Computer Science", "Nairobi Campus");
  await createDepartment("DPT002", "Information Technology", "Mombasa Campus");
  await createDepartment("DPT003", "Software Engineering", "Kisumu Campus");
  await createDepartment("DPT004", "Cyber Security", "Eldoret Campus");
  await createDepartment("DPT005", "Business Studies", "Nakuru Campus");
  await createDepartment("DPT006", "Business and Finance", "Kisii Campus");

  console.log('New Department Created:', newDepartment);
}

// Execute the main function and handle errors
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



//Write a function named getEmployees that retrieves all employees from the database, including their department details. Your function should use Prisma's findMany() method with the include option to fetch each employee along with their related department information.
    async function getEmployees() {
      const employees = await prisma.employee.findMany({
        include: {
          department: true,
        },
      });
      return employees;
    }


    // Call the getEmployees function and log the results
    getEmployees().then((employees) => {
      console.log('All Employees with Departments:', employees);
    });


    //Write a function named getEmployee that retrieves a single employee based on their ID, including their department details. The function should take one parameter, the employee ID, and use Prisma's findUnique() method with the include option to fetch the employee along with their related department information.
    async function getEmployee(employeeId) {
      const employee = await prisma.employee.findUnique({
        where: {
          id: employeeId,
        },
        include: {
          department: true,
        },
      });
      return employee;
    }


    // Call the getEmployee function with a sample ID and log the result
    const sampleEmployeeId = "EMP001";
    getEmployee(sampleEmployeeId).then((employee) => {
      if (employee) {
        console.log('Employee Found with Department:', employee);
      } else {
        console.log('Employee not found');
      }
    });


    //Write a function named getBySalaryRange that retrieves all employees whose salaries fall within a specified range. The function accepts two parameters: min: minimum salary value. max: maximum salary value. Before performing the query, add a validation check: if min is greater than max, throw an error "Minimum cannot be greater than maximum" If the values are valid, use Prisma's findMany() method to fetch all employees whose salary is between the given min and max values.
    async function getBySalaryRange(min, max) {
      if (min > max) {
        throw new Error("Minimum cannot be greater than maximum");
      }
      const employees = await prisma.employee.findMany({
        where: {
          salary: {
            gte: min,
            lte: max,
          },
        },
      });
      return employees;
    } 
    // Call the getBySalaryRange function with sample values and log the results
    const minSalary = 70000.00;
    const maxSalary = 90000.00;
    getBySalaryRange(minSalary, maxSalary).then((employees) => {
      console.log(`Employees with salary between ${minSalary} and ${maxSalary}:`, employees);
    }).catch((error) => {
      console.error(error.message);
    });


    //Write a function deleteEmployee that deletes the employee with id EMP011
    async function deleteEmployee(employeeId) {
      const deletedEmployee = await prisma.employee.delete({
        where: {
          id: employeeId,
        },
      });
      return deletedEmployee;
    } 


    // Call the deleteEmployee function with the ID "EMP011" and log the result
    const deleteEmployeeId = "EMP011";
    deleteEmployee(deleteEmployeeId).then((deletedEmployee) => {
      console.log('Deleted Employee:', deletedEmployee);
    });
    
    //Write a function called updateEmployee that updates the `salary of employee with id "EMP010" to 90000 respectively. The function should use Prisma's update() method to find the employee by their ID and modify the salary field.
    async function updateEmployee(employeeId, newSalary) {
      const updatedEmployee = await prisma.employee.update({
        where: {
          id: employeeId,
        },
        data: {
          salary: newSalary,
        },
      });
      return updatedEmployee;
    }


    // Call the updateEmployee function to change the salary of EMP010 and log the result
    const updateEmployeeId = "EMP010";
    const newSalary = 90000.00;
    updateEmployee(updateEmployeeId, newSalary).then((updatedEmployee) => {
      console.log('Updated Employee Salary:', updatedEmployee);
    });