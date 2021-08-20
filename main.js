// task1
const searchCandidatesByPhoneNumber = value => {
    return condidateArr.filter(el => el.phone.includes(value))
}

console.log(searchCandidatesByPhoneNumber('43'));

// task2
const getCandidateById = id => {
    const candidate = condidateArr.filter(el => el._id === id)[0]
    const arrOfRegister = candidate.registered.split('-')

    candidate.registered = `${arrOfRegister[2].substr(0, 2)}/${arrOfRegister[1]}/${arrOfRegister[0]}`

    return candidate
}

console.log(getCandidateById('5e216bc997af60c69199e4ca'));

// task3
const sortCandidatesArr = sortBy => {
    const formatBalance = value => {
        return Number(value.replace(/,/g, '').replace('$', ''))
    }

    switch (sortBy) {
        case 'asc':
            return [...condidateArr].sort((a, b) => {
                return formatBalance(a.balance) - formatBalance(b.balance)
            })
        case 'desc':
            return [...condidateArr].sort((a, b) => {
                return formatBalance(b.balance) - formatBalance(a.balance)
            })
        default:
            return condidateArr
    }
}

console.log(sortCandidatesArr('asc'))
console.log(sortCandidatesArr('desc'))
console.log(sortCandidatesArr())

// task4
const getEyeColorMap = () => {
    const obj = {}

    condidateArr.map(el => {
        if (!obj.hasOwnProperty(el.eyeColor)) {
            Object.defineProperty(obj, el.eyeColor, {
                enumerable: true,
                value: []
            })
        }

        for (let key in obj) {
            if (key === el.eyeColor) {
                obj[key].push(el)
            }
        }
    })

    return obj
}

console.log(getEyeColorMap());