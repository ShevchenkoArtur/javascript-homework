// task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.round(1 - 0.5 + Math.random() * 6)

        if (number >= 1 && number <= 5) {
            console.log('Start the game')
            resolve(number)
        }

        if (number === 6) reject(new Error('number === 6'))
    }, 2000)
})
    .then(response => {
        if (response === 1) console.log('Stay here')
        if (response >= 2) console.log(`Go ${response} steps`)
    })
    .catch(error => console.log('Exit'))