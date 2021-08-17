// task1
const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, index) => {
    arr.splice(index, 1)
}

removeUser(arr, 1)
console.log(arr)

// task2
const obj = {name: 'Vasya', age: 1}

const getAllKeys = obj => {
    const result = []
    for (let key in obj) {
        result.push(key)
    }
    return result
}

console.log(getAllKeys(obj))