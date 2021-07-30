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