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