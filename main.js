// task1
const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, index) => {
    arr.splice(index, 1)
}

removeUser(arr, 1)
console.log(arr)