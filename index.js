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


  //Write a function named getDepartments that retrieves all department records from the database and use Prisma's findMany method.
  async function getDepartments() {
    const departments = await prisma.department.findMany();
    return departments;
  }

    // Call the getDepartments function and log the results
    getDepartments().then((departments) => {
      console.log('All Departments:', departments);
    });

    //Write a function named getDepartment that retrieves a single department from the database based on its ID and The function should take one parameter, the department ID, and use Prisma;s findUnique() method to fetch the matching department record.If the department is found, log it to the console, if it is not found, log the message "Department not found"
    async function getDepartment(departmentId) {
      const department = await prisma.department.findUnique({
        where: {
          ID: departmentId,
        },
      });
      return department;
    }

    // Call the getDepartment function with a sample ID and log the result
    const sampleId = "DPT001";
    getDepartment(sampleId).then((department) => {
      if (department) {
        console.log('Department Found:', department);
      } else {
        console.log('Department not found');
      }
    });

    //function called deleteDepartment that deletes the "Business and Finance" department with department ID "DPT006"
    async function deleteDepartment(departmentId) {
      const deletedDepartment = await prisma.department.delete({
        where: {
          ID: departmentId,
        },
      });
      return deletedDepartment;
    }


    // Call the deleteDepartment function with the ID "DPT006" and log the result
    const deleteId = "DPT006";
    deleteDepartment(deleteId).then((deletedDepartment) => {
      console.log('Deleted Department:', deletedDepartment);
    });


    //Write a function named updateDepartment that updates the location of the Cyber Security department (DPT004) to "Kericho Campus".The function should use Prisma's update() method to find the department by its ID (DPT004) and modify the location field.
    async function updateDepartment(departmentId, newLocation) {
      const updatedDepartment = await prisma.department.update({
        where: {
          ID: departmentId,
        },
        data: {
          Location: newLocation,
        },
      });
      return updatedDepartment;
    }


    // Call the updateDepartment function to change the location of DPT004 and log the result
    const updateId = "DPT004";
    const newLocation = "Kericho Campus";
    updateDepartment(updateId, newLocation).then((updatedDepartment) => {
      console.log('Updated Department:', updatedDepartment);
    });



    //Write a function named createEmployee that adds a new employee record to the database. It should take parameters for the id: a string that uniquely identifies an employee firstName: The employee's first name.lastName: The employee's last name..email: The employee's email address. salary: The employee's salary amount.departmentId: The ID of the department the employee belongs to. The function should use Prisma's create method to insert new employee records into the database. 
    async function createEmployee(id, firstName, lastName, email, salary, departmentId) {
      const employee = await prisma.employee.create({
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          salary: salary,
          departmentId: departmentId,
        },
      });
      return employee;
    }

    // Call the createEmployee function to add new employees and log the result
    createEmployee("EMP001", "John", "Mwangi", "john.mwangi@company.com", 65000.00, "DPT001");
createEmployee("EMP002", "Alice", "Otieno", "alice.otieno@company.com", 92000.00, "DPT002");
createEmployee("EMP003", "Brian", "Kariuki", "brian.kariuki@company.com", 88000.00, "DPT003");
createEmployee("EMP004", "Grace", "Mutua", "grace.mutua@company.com", 97000.00, "DPT004");
createEmployee("EMP005", "Kevin", "Omondi", "kevin.omondi@company.com", 66000.00, "DPT005");
createEmployee("EMP006", "Linda", "Njeri", "linda.njeri@company.com", 91000.00, "DPT001");
createEmployee("EMP007", "Samuel", "Kiptoo", "samuel.kiptoo@company.com", 63000.00, "DPT002");
createEmployee("EMP008", "Mary", "Wanjiku", "mary.wanjiku@company.com", 89000.00, "DPT003");
createEmployee("EMP009", "Peter", "Kamau", "peter.kamau@company.com", 95000.00, "DPT004");
createEmployee("EMP010", "Faith", "Achieng", "faith.achieng@company.com", 78000.00, "DPT005");
createEmployee("EMP011", "Ann", "Chebet", "ann.chebet@company.com", 78000.00, "DPT003");


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