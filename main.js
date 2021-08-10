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
                        Student.contractStudents.push(newContractStudent[0])
                    } else {
                        this.isSelfPayment = true
                        Student.contractStudents.push(this)
                    }
                }

                if (this.ratingPoint > Student.budgetStudents[0].ratingPoint) {
                    const newContractStudent = Student.budgetStudents.splice(0, 1, this)
                    Student.budgetStudents.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1)
                    newContractStudent[0].isSelfPayment = true
                    Student.contractStudents.push(newContractStudent[0])
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

// task2
class CustomString {
    static letters_en_ru = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м',
        'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
    static letters_EN_RU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М',
        'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я']

    reverse(str) {
        let result = ''
        for (let i = 0; i < str.length; i++) {
            result += str[(str.length - 1) - i]
        }
        return result
    }

    ucFirst(str) {
        let result = ''

        for (let i = 0; i < CustomString.letters_en_ru.length; i++) {
            if (str[0] === CustomString.letters_en_ru[i]) {
                result += CustomString.letters_EN_RU[i]
            }
        }

        for (let i = 1; i < str.length; i++) {
            result ? result += str[i] : result += str[0] + str[i]
        }

        return result
    }

    ucWords(str) {
        let result = ''
        let newStr = ''

        if (str[str.length - 1] !== ' ') {
            str += ' '
        }

        let word = ''
        const arrOfWords = []

        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                arrOfWords.push(word)
                word = ''
            } else {
                word += str[i]
            }
        }

        for (let i = 0; i < arrOfWords.length; i++) {
            newStr += this.ucFirst(arrOfWords[i]) + ' '
        }

        for (let i = 0; i < newStr.length - 1; i++) {
            result += newStr[i]
        }

        return result
    }
}

const myString = new CustomString();

console.log(myString.reverse('qwerty'))
console.log(myString.ucFirst('qwerty'))
console.log(myString.ucWords('qwerty qwerty qwerty'))
