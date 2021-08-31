// task1
const arr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (arr, index) => {
    arr.splice(index, 1)
}

removeUser(arr, 1)
console.log(arr)

// task2
const obj = {name: 'Vasya', age: 1}

const getAllKeys = obj => Object.keys(obj)

console.log(getAllKeys(obj))

// task3
const getAllValues = obj => Object.values(obj)

console.log(getAllValues(obj));

// task4
const newCandidate = {
    "_id": "newCandidate",
    "index": 0,
    "guid": "e325a387-e1f4-4c1a-8df8-f188b06e3a2a",
    "isActive": true,
    "balance": "$3,365.14",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "New Candidate",
    "gender": "female",
    "company": "EZENT",
    "email": "bernicewalton@ezent.com",
    "phone": "+1 (803) 433-2863",
    "address": "229 Granite Street, Durham, Colorado, 6084",
    "about": "Nisi cupidatat excepteur non in et ex consequat dolor. Esse exercitation id culpa non. Eiusmod cupidatat est esse dolor ex ex dolor labore exercitation. Reprehenderit dolor velit magna voluptate irure do nulla aliquip enim. Aute sit veniam tempor nulla irure sit culpa culpa excepteur labore nostrud cupidatat. Eu amet dolor culpa dolor pariatur ipsum labore. Minim ad qui qui culpa consequat amet id irure culpa tempor esse eu.\r\n",
    "registered": "2015-11-05T05:14:05 -02:00",
    "latitude": -31.58974,
    "longitude": -174.55185,
    "tags": [
        "quis",
        "ad",
        "amet",
        "Lorem",
        "et",
        "magna",
        "ut"
    ],
    "friends": [
        {
            "id": 0,
            "name": "Clayton Mccarthy"
        },
        {
            "id": 1,
            "name": "Odonnell Sharp"
        },
        {
            "id": 2,
            "name": "Marisol Olsen"
        },
        {
            "id": 3,
            "name": "Audrey Henson"
        },
        {
            "id": 4,
            "name": "Dickson Maxwell"
        },
        {
            "id": 5,
            "name": "Trudy Singleton"
        },
        {
            "id": 6,
            "name": "Tyson Ayala"
        },
        {
            "id": 7,
            "name": "Sharron Porter"
        },
        {
            "id": 8,
            "name": "Lenore Cleveland"
        },
        {
            "id": 9,
            "name": "Shelton Curtis"
        }
    ],
    "greeting": "Hello, Bernice Walton! You have 4 unread messages.",
    "favoriteFruit": "strawberry"
}

const insertIntoArr = (obj, id) => condidateArr.splice(condidateArr.findIndex(val => val._id === id), 0, obj)

insertIntoArr(newCandidate, condidateArr[40]._id);

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

// task6
const getCompanyNames = () => {
    const result = []

    condidateArr.map(el => {
        if (!result.includes(el.company)) {
            result.push(el.company)
        }
    })

    return result
}

console.log(getCompanyNames());

// task7
const getUsersByYear = year => condidateArr.filter(el => String(year) === el.registered.split('-')[0])

console.log(getUsersByYear(2017));

// task8
const getCandidateByUnreadMsg = amount => {
    const result = []

    condidateArr.map(el => {
        let msgCount = ''

        el.greeting.split(' ').map(el => {
            if (!isNaN(el)) {
                msgCount = el
            }
        })

        if (String(amount) === msgCount) {
            result.push(el)
        }
    })

    return result
}

console.log(getCandidateByUnreadMsg(8));

// task9
const getCandidatesByGender = gender => condidateArr.filter(el => el.gender === gender)

console.log(getCandidatesByGender('male'));

// task10
const arrOfNum = [1, 2, 3, 4, 5]

Array.prototype.customJoin = function (separator) {
    let str = ''
    let result = ''

    for (let i = 0; i < this.length; i++) {
        str += this[i] + separator
    }

    for (let i = 0; i < str.length - 1; i++) {
        result += str[i]
    }

    return result
}

console.log(arrOfNum.customJoin(':'))

Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator
    let firstIndex

    if (arguments.length === 1) {
        accumulator = this[0]
        firstIndex = 1
    } else {
        accumulator = initialValue
        firstIndex = 0
    }

    for (let index = firstIndex; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index)
    }

    return accumulator
}

console.log(arrOfNum.customReduce((total, num) => total + num, 0))