
    //Write a function named createEmployee that adds a new employee record to the database. It should take parameters for the id: a string that uniquely identifies an employee firstName: The employee's first name.lastName: The employee's last name..email: The employee's email address. salary: The employee's salary amount.departmentId: The ID of the department the employee belongs to. The function should use Prisma's create method to insert new employee records into the database. 
    async function createEmployee(id, firstName, lastName, email, salary, departmentId) {
      const employee = await prisma.employee.create({
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          salary: salary,
          departmentId: departmentId,
        },
      });
      return employee;
    }

    // Call the createEmployee function to add new employees and log the result
    createEmployee("EMP001", "John", "Mwangi", "john.mwangi@company.com", 65000.00, "DPT001");
createEmployee("EMP002", "Alice", "Otieno", "alice.otieno@company.com", 92000.00, "DPT002");
createEmployee("EMP003", "Brian", "Kariuki", "brian.kariuki@company.com", 88000.00, "DPT003");
createEmployee("EMP004", "Grace", "Mutua", "grace.mutua@company.com", 97000.00, "DPT004");
createEmployee("EMP005", "Kevin", "Omondi", "kevin.omondi@company.com", 66000.00, "DPT005");
createEmployee("EMP006", "Linda", "Njeri", "linda.njeri@company.com", 91000.00, "DPT001");
createEmployee("EMP007", "Samuel", "Kiptoo", "samuel.kiptoo@company.com", 63000.00, "DPT002");
createEmployee("EMP008", "Mary", "Wanjiku", "mary.wanjiku@company.com", 89000.00, "DPT003");
createEmployee("EMP009", "Peter", "Kamau", "peter.kamau@company.com", 95000.00, "DPT004");
createEmployee("EMP010", "Faith", "Achieng", "faith.achieng@company.com", 78000.00, "DPT005");
createEmployee("EMP011", "Ann", "Chebet", "ann.chebet@company.com", 78000.00, "DPT003");

