import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();
   
   
   //Write a function deleteEmployee that deletes the employee with id EMP011
    async function deleteEmployee(employeeId) {
      const deletedEmployee = await prisma.employee.delete({
        where: {
          ID: employeeId,
        },
      });
      return deletedEmployee;
    } 


    // Call the deleteEmployee function with the ID "EMP011" and log the result
    const deleteEmployeeId = "EMP011";
    deleteEmployee(deleteEmployeeId).then((deletedEmployee) => {
      console.log('Deleted Employee:', deletedEmployee);
    });