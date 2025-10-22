import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();


    //function called deleteDepartment that deletes the "Business and Finance" department with department ID "DPT006"
    async function deleteDepartment(departmentId) {
      const deletedDepartment = await prisma.department.delete({
        where: {
          ID: departmentId,
        },
      });
      return deletedDepartment;
    }


    // Call the deleteDepartment function with the ID "DPT006" and log the result
    const deleteId = "DPT006";
    deleteDepartment(deleteId).then((deletedDepartment) => {
      console.log('Deleted Department:', deletedDepartment);
    });

    