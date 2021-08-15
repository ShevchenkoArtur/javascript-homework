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

// task2
const updateArr = () => {
    let arr = []

    return value => {
        if (typeof value === 'undefined') {
            arr = []
            return arr
        }

        arr.push(value)
        return arr
    }
}

const getUpdatedArr = updateArr()

console.log(getUpdatedArr(3))
console.log(getUpdatedArr(5))
console.log(getUpdatedArr({name: 'Vasya'}))
console.log(getUpdatedArr())
console.log(getUpdatedArr(4))