// task1
const makeCounter = () => {
    let counter = 0

    return num => {
        return counter += num
    }
}

let counter = makeCounter()

console.log(counter(3))
console.log(counter(5))
console.log(counter(228))