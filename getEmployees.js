import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

//Write a function named getEmployees that retrieves all employees from the database, including their department details. Your function should use Prisma's findMany() method with the include option to fetch each employee along with their related department information.
    async function getEmployees() {
      const employees = await prisma.employee.findMany({
        include: {
          Department: true,
        },
      });
      return employees;
    }


    // Call the getEmployees function and log the results
    getEmployees().then((employees) => {
      console.log('All Employees with Departments:', employees);
    });