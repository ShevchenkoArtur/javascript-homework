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

// task2
class CustomError extends Error {
    constructor(message, name) {
        super(message);
        this.message = message
        this.name = name
    }
}

const goToShop = () => Promise.resolve([1, 2, 3, 4])

const makeDinner = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            goToShop()
                .then(response => {
                    if (response.length > 3) {
                        resolve('Bon Appetit')
                    } else {
                        reject('Too low products')
                    }
                })
        }, 3000)
    })
}

makeDinner()
    .then(response => {
        makeDinner().then(console.log(response))
    })
    .catch(error => {
        const myError = new CustomError('Too low products', 'Product Error')
        throw myError
    })

// task3
const getCards = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector('.container')
            data.map(el => {
                const card = document.createElement('div')
                const cardInfo = document.createElement('div')
                const cardImage = document.createElement('div')
                const title = document.createElement('div')
                const content = document.createElement('div')
                const name = document.createElement('h1')
                const status = document.createElement('div')
                const liveStatus = document.createElement('div')
                const speciesAndStatus = document.createElement('p')
                const location = document.createElement('p')
                const img = document.createElement('img')

                if (el.status === 'Dead') {
                    liveStatus.classList.add('dead')
                }

                card.classList.add('card')
                cardInfo.classList.add('card-info')
                cardImage.classList.add('card-image')
                title.classList.add('title')
                content.classList.add('content')
                status.classList.add('status')
                liveStatus.classList.add('live-status')
                img.alt = 'Image'
                name.innerText = el.name
                speciesAndStatus.innerText = `${el.species} -- ${el.status}`
                location.innerText = el.location.name
                img.src = el.image

                card.append(cardInfo, cardImage)
                cardInfo.append(title, content)
                title.append(name, status)
                status.append(liveStatus, speciesAndStatus)
                content.append(location)
                cardImage.append(img)
                container.append(card)
            })
        })
}

getCards([1, 10])

const getFilteredCards = () => {
    const container = document.querySelector('.container')
    const form = document.querySelector('.form-container')
    const urlApi = 'https://rickandmortyapi.com/api/character'

    const removeChildren = node => {
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
    }

    const filterBy = urlOptions => {
        fetch(`${urlApi}/?${urlOptions}`)
            .then(response => response.json())
            .then(data => {
                removeChildren(container)
                const arrOfId = data.results.map(el => el.id)
                getCards(arrOfId)
            })
    }

    form.addEventListener('click', (e) => {
        if (e.target.tagName === 'FORM' || e.target.tagName === 'LABEL') return

        switch (e.target.id) {
            case 'male':
                filterBy('gender=male')
                break
            case 'female':
                filterBy('gender=female')
                break
            case 'alive':
                filterBy('status=alive')
                break
            case 'dead':
                filterBy('status=dead')
                break
        }
    })
}

getFilteredCards()