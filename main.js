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

// task2
Employee.prototype.getFullName = function () {
    return `${this.surname} ${this.name}`
}

console.log(employeeObj.getFullName());

// task3
const createEmployeeFromArr = arr => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        const newEmployee = new Employee(arr[i])
        result.push(newEmployee)
    }

    return result
}

const employeeConstructArr = createEmployeeFromArr(employeeArr)

console.log(employeeConstructArr)

// task4
const getFullNamesFromArr = arr => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].getFullName())
    }

    return result
}

console.log(getFullNamesFromArr(employeeConstructArr));

// task5
const getMiddleSalary = arr => {
    let allSalary = 0

    for (let i = 0; i < arr.length; i++) {
        allSalary += arr[i].salary
    }

    return Math.round(allSalary / arr.length)
}

console.log(getMiddleSalary(employeeConstructArr));

// task6
const getRandomEmployee = arr => {
    let min = 0
    let max = arr.length
    return arr[Math.floor(Math.random() * (max - min)) + min]
}

console.log(getRandomEmployee(employeeConstructArr));

// task 7
Object.defineProperty(Employee.prototype, 'fullInfo', {
    get() {
        let str = ''
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                str += `${key} - ${this[key]}, `
            }
        }

        return str.substring(0, str.length - 2)
    },

    set(value) {
        for (let key in this) {
            if (value.hasOwnProperty(key)) {
                this[key] = value[key]
            }
        }
    }
})

employeeObj.fullInfo = {name: 'name', salary: 12, newProp: 'wp'}
console.log(employeeObj)
console.log(employeeObj.fullInfo)