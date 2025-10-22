import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to create a new department in the database
async function createDepartment(ID, departmentName, location) {
  const department = await prisma.department.create({
    data: {
      ID: ID,
      DepartmentName: departmentName,
      Location: location,
    },
  });
  return department;
}

// Main function to insert multiple records
async function main() {
  const newDepartment = await createDepartment("DPT001", "Computer Science", "Nairobi Campus");
  await createDepartment("DPT002", "Information Technology", "Mombasa Campus");
  await createDepartment("DPT003", "Software Engineering", "Kisumu Campus");
  await createDepartment("DPT004", "Cyber Security", "Eldoret Campus");
  await createDepartment("DPT005", "Business Studies", "Nakuru Campus");
  await createDepartment("DPT006", "Business and Finance", "Kisii Campus");

  console.log('New Department Created:', newDepartment);
}

// Execute the main function and handle errors
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  //Write a function named getDepartments that retrieves all department records from the database and use Prisma's findMany method.
  async function getDepartments() {
    const departments = await prisma.department.findMany();
    return departments;
  }

    // Call the getDepartments function and log the results
    getDepartments().then((departments) => {
      console.log('All Departments:', departments);
    });

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