// task1
function Employee(employee) {
    this.id = employee.id
    this.name = employee.name
    this.surname = employee.surname
    this.salary = employee.salary
    this.workExperience = employee.workExperience
    this.isPrivileges = employee.isPrivileges
    this.gender = employee.gender
}

const employee = employeeArr[0]
const employeeObj = new Employee(employee)

console.log(employeeObj)