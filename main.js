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