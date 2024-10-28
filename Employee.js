function printEmployeesInReverse(employees) {
    // Loop through the array in reverse
    for (let i = employees.length - 1; i >= 0; i--) {
        const employee = employees[i];
        console.log(`Employee No: ${employee.Eno}`);
        console.log(`Name: ${employee.Ename}`);
        console.log(`Post: ${employee.post}`);
        console.log(`Salary: ${employee.salary}`);
        console.log(`Years of Experience: ${employee.yearsOfExperience}`);
        console.log('----------------------');
    }
}

// Example array of employee objects
const employees = [
    { Eno: 101, Ename: "sonali", post: "Manager", salary: 50000, yearsOfExperience: 5 },
    { Eno: 102, Ename: " Smita ", post: "Developer", salary: 40000, yearsOfExperience: 3 },
    { Eno: 103, Ename: "Sawan", post: "Designer", salary: 35000, yearsOfExperience: 2 }
];

// Call the function
printEmployeesInReverse(employees);
