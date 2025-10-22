 import { PrismaClient } from '@prisma/client';
  
  const prisma = new PrismaClient();
 
 //Write a function named getEmployee that retrieves a single employee based on their ID, including their department details. The function should take one parameter, the employee ID, and use Prisma's findUnique() method with the include option to fetch the employee along with their related department information.
    async function getEmployee(employeeId) {
      const employee = await prisma.employee.findUnique({
        where: {
          ID: employeeId,
        },
        include: {
          Department: true,
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
