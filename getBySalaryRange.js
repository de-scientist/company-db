import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

//Write a function named getBySalaryRange that retrieves all employees whose salaries fall within a specified range. The function accepts two parameters: min: minimum salary value. max: maximum salary value. Before performing the query, add a validation check: if min is greater than max, throw an error "Minimum cannot be greater than maximum" If the values are valid, use Prisma's findMany() method to fetch all employees whose salary is between the given min and max values.
    async function getBySalaryRange(min, max) {
      if (min > max) {
        throw new Error("Minimum cannot be greater than maximum");
      }
      const employees = await prisma.employee.findMany({
        where: {
          Salary: {
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