import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//function createDepartment that uses Prisma's create method to insert a new record into the database.
async function createDepartment(ID: string, departmentName: string, location: string) {
  const department = await prisma.department.create({
    data: {
      ID,
      DepartmentName: departmentName,
      Location: location,
    },
  });
  return department;
}
