import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

    //Write a function called updateEmployee that updates the `salary of employee with id "EMP010" to 90000 . The function should use Prisma's update() method to find the employee by their ID and modify the salary field.
    async function updateEmployee(employeeId, newSalary) {
      const updatedEmployee = await prisma.employee.update({
        where: {
          ID: employeeId,
        },
        data: {
          Salary: newSalary,
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