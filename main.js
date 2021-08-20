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