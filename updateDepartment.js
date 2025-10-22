import { PrismaClient } from '@prisma/client';
 
 const prisma = new PrismaClient();

//Write a function named updateDepartment that updates the location of the Cyber Security department (DPT004) to "Kericho Campus".The function should use Prisma's update() method to find the department by its ID (DPT004) and modify the location field.
    async function updateDepartment(departmentId, newLocation) {
      const updatedDepartment = await prisma.department.update({
        where: {
          ID: departmentId,
        },
        data: {
          Location: newLocation,
        },
      });
      return updatedDepartment;
    }


    // Call the updateDepartment function to change the location of DPT004 and log the result
    const updateId = "DPT004";
    const newLocation = "Kericho Campus";
    updateDepartment(updateId, newLocation).then((updatedDepartment) => {
      console.log('Updated Department:', updatedDepartment);
    });
