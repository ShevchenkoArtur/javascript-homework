// task1
class Student {
    constructor(enrollee) {
        this.id = Student.id++
        this.name = enrollee.name
        this.surname = enrollee.surname
        this.ratingPoint = enrollee.ratingPoint
        this.schoolPoint = enrollee.schoolPoint
        this.isSelfPayment = this.ratingPoint < 800
        Student.students.push(this)

        if (this.isSelfPayment) {
            Student.contractStudents.push(this)
        }

        if (!this.isSelfPayment) {
            if (Student.budgetStudents.length < 5) {
                Student.budgetStudents.push(this)
                Student.budgetStudents.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1)
            } else {
                if (this.ratingPoint < Student.budgetStudents[0].ratingPoint) {
                    this.isSelfPayment = true
                    Student.contractStudents.push(this)
                }

                if (this.ratingPoint === Student.budgetStudents[0].ratingPoint) {
                    if (this.schoolPoint > Student.budgetStudents[0].schoolPoint) {
                        const newContractStudent = Student.budgetStudents.splice(0, 1, this)
                        Student.budgetStudents.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1)
                        newContractStudent[0].isSelfPayment = true
                        Student.contractStudents.push({...newContractStudent[0]})
                    } else {
                        this.isSelfPayment = true
                        Student.contractStudents.push(this)
                    }
                }

                if (this.ratingPoint > Student.budgetStudents[0].ratingPoint) {
                    const newContractStudent = Student.budgetStudents.splice(0, 1, this)
                    Student.budgetStudents.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1)
                    newContractStudent[0].isSelfPayment = true
                    Student.contractStudents.push({...newContractStudent[0]})
                }
            }
        }
    }

    static id = 1
    static contractStudents = []
    static budgetStudents = []
    static students = []
}

const students = []

for (let i = 0; i < enrolleeArr.length; i++) {
    students.push(new Student(enrolleeArr[i]))
}

console.log(Student.students)
console.log(Student.budgetStudents)
console.log(Student.contractStudents)
