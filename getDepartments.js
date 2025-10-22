import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

//Write a function named getDepartments that retrieves all department records from the database and use Prisma's findMany method.
  async function getDepartments() {
    const departments = await prisma.department.findMany();
    return departments;
  }

    // Call the getDepartments function and log the results
    getDepartments().then((departments) => {
      console.log('All Departments:', departments);
    });
