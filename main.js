// task1
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0 && i % 3 !== 0) {
        console.log('Fiz')
    }

    if (i % 2 !== 0 && i % 3 !== 0) {
        console.log('Buz')
    }

    if (i % 3 === 0) {
        console.log('FizBuz')
    }
}

// task2
let factorial = 1

for (let i = 10; i >= 1; i--) {
    factorial *= i
}

console.log(factorial)

// task3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let i = 0
let result = 0;

while (i < consumptionPerWeek * weeksAmount) {
    i += sheetsInReamPaper
    result++
}

console.log(result)