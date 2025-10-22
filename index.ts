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

//use Prisma's create method to insert a new record into the database
async function main() {
  const newDepartment = await createDepartment("DPT001", "Computer Science", "Nairobi Campus");
createDepartment("DPT002", "Information Technology", "Mombasa Campus");
createDepartment("DPT003", "Software Engineering", "Kisumu Campus");
createDepartment("DPT004", "Cyber Security", "Eldoret Campus");
createDepartment("DPT005", "Business Studies", "Nakuru Campus");
createDepartment("DPT006", "Business and Finance", "Kisii Campus");
  console.log('New Department Created:', newDepartment);
}