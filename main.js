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

// task4
const addZero = num => {
    if (num <= 9) return '0' + num
    else return num
}

const timer = sec => {
    let timerId = setInterval(function () {
        if (sec === 0) {
            clearInterval(timerId)
            console.log('Time End')
            return
        }

        let minutes = Math.floor(sec % 3600 / 60)
        let seconds = Math.floor(sec % 60)

        console.log(`${addZero(minutes)}:${addZero(seconds)}`)
        sec--
    }, 1000)
}

timer(120)