import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

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