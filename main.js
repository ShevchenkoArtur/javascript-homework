// task1
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const arrOfCity = Object.keys(citiesAndCountries)
const result = []

for (let i = 0; i < arrOfCity.length; i++) {
    result.push(`${arrOfCity[i]} - это ${citiesAndCountries[arrOfCity[i]]}`)
}

console.log(result)

// task2
const getArray = amount => {
    if (amount % 3 !== 0) {
        throw 'Максимальное значение должно делится на 3 нацело'
    }

    let result = []

    for (let i = 1; i <= amount; i++) {
        result.push(i)
    }

    for (let i = 0; i < amount / 3; i++) {
        let newArr = result.slice(0, 3)
        result.splice(0, 3)
        result.push(newArr)
    }

    return result
}

console.log(getArray(12));

// task3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const switchDayOfWeek = (lang, day) => {
    switch (day) {
        case 1:
            return namesOfDays[lang][day - 1]
        case 2:
            return namesOfDays[lang][day - 1]
        case 3:
            return namesOfDays[lang][day - 1]
        case 4:
            return namesOfDays[lang][day - 1]
        case 5:
            return namesOfDays[lang][day - 1]
        case 6:
            return namesOfDays[lang][day - 1]
        case 7:
            return namesOfDays[lang][day - 1]
        default:
            throw 'Введен некорректный номер дня'
    }
}

const getNameOfDay = (lang, day) => {
    const ruKey = Object.keys(namesOfDays)[0]
    const enKey = Object.keys(namesOfDays)[1]

    if (typeof lang !== 'string') {
        throw 'Введены некорректные данные'
    }

    if (lang !== ruKey && lang !== enKey) {
        throw 'Введен неверный язык'
    }

    if (lang === ruKey) {
        return switchDayOfWeek(lang, day)
    }

    if (lang === enKey) {
        return switchDayOfWeek(lang, day)
    }
}

console.log(getNameOfDay('en', 7));

// task4
const isUnique = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return false
        }
    }
    return true
}

const getSumOfTwoSmallestNumbers = arr => {
    if (!Array.isArray(arr)) {
        throw 'Аргументом должен быть массив'
    }

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i]) || typeof arr[i] !== 'number') {
            throw 'Массив должен содержать целые числа'
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            throw 'Массив должен содержать положительные числа'
        }
    }

    if (arr.length < 4) {
        throw 'Массив должен содержать минимум 4 числа'
    }

    if (!isUnique(arr)) {
        throw 'В массиве не могут содержаться одинаковые числа'
    }

    arr.sort((a, b) => a - b)

    return arr[0] + arr[1]
}

console.log(getSumOfTwoSmallestNumbers([19, 5, 42, 2, 77]));

// task5
const binaryArr = [1, 1, 1, 0, 0, 1]
let integerNumber = 0

binaryArr.reverse()

for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === 0) {
        continue
    }

    if (binaryArr[i] === 1) {
        integerNumber += binaryArr[i] * Math.pow(2, i)
    }
}

console.log(integerNumber)