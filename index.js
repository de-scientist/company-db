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

    
    //Write a function called updateEmployee that updates the `salary of employee with id "EMP010" to 90000 respectively. The function should use Prisma's update() method to find the employee by their ID and modify the salary field.
    async function updateEmployee(employeeId, newSalary) {
      const updatedEmployee = await prisma.employee.update({
        where: {
          id: employeeId,
        },
        data: {
          salary: newSalary,
        },
      });
      return updatedEmployee;
    }


    // Call the updateEmployee function to change the salary of EMP010 and log the result
    const updateEmployeeId = "EMP010";
    const newSalary = 90000.00;
    updateEmployee(updateEmployeeId, newSalary).then((updatedEmployee) => {
      console.log('Updated Employee Salary:', updatedEmployee);
    });