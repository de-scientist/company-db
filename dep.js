 import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();
 
 async function getBySalaryRange(min, max) {
      if (min > max) {
        throw new Error("Minimum cannot be greater than maximum");
      }
      const employees = await prisma.employee.findMany({
        where: {
          AND: [
            {
              salary: {
                gte: min,
                lte: max,
              }
            }
          ]
        },
        include: {
          department: true,
        }
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
