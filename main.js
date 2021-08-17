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

// task3
const getAllValues = obj => {
    const result = []
    for (let key in obj) {
        result.push(obj[key])
    }
    return result
}

console.log(getAllValues(obj));

// task4
const newCandidate = {
    id: 4,
    name: 'Katya'
}

const insertIntoArr = (obj, id) => {
    let candidateIndex = null

    for (let i = 0; i < condidateArr.length; i++) {
        if (condidateArr[i]._id === id) {
            candidateIndex = i
            break
        }
    }
    condidateArr.splice(candidateIndex, 0, obj)
}

insertIntoArr(newCandidate, condidateArr[40]._id)
console.log(condidateArr);

// task5
class Candidate {
    constructor(candidate) {
        this.candidate = candidate
    }

    state() {
        return this.candidate.address.split(',')[2]
    }
}

const candidate = new Candidate(condidateArr[0])

console.log(candidate.state());