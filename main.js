// task1
const searchCandidatesByPhoneNumber = value => {
    return condidateArr.filter(el => el.phone.includes(value))
}

console.log(searchCandidatesByPhoneNumber('43'));