// task1
const addInputs = () => {
    const numOfInputs = prompt('Введите число:')
    const button = document.querySelector('.button')

    const style = document.querySelector('style')
    style.append(document.innerHTML = '.myClass {background-color: yellow}')

    for (let i = 1; i <= Number(numOfInputs); i++) {
        const input = document.createElement('input')

        input.classList.add('input-item')
        input.value = `Input ${i}`

        if (i === Number(numOfInputs)) {
            input.classList.add('margin-zero')
        }

        if ((i % 2)) {
            input.classList.add('myClass')
        }

        if (!(i % 3)) {
            input.value = ''
            input.placeholder = 'Some text'
        }

        button.before(input)
    }
}

addInputs()

// task2
const addTime = () => {
    const addZero = num => {
        if (num <= 9) return '0' + num
        else return num
    }

    const getTime = () => {
        const date = new Date()
        let hrs = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        return `${addZero(hrs)} : ${addZero(min)} : ${addZero(sec)}`
    }

    const h2 = document.createElement('h2')
    const startButton = document.createElement('button')
    const stopButton = document.createElement('button')

    startButton.innerText = 'Start'
    stopButton.innerText = 'Stop'

    document.body.append(startButton, stopButton, h2)

    h2.innerText = getTime()

    startButton.addEventListener('click', () => {
        const timerId = setInterval(() => {
            h2.innerText = getTime()
        }, 1000)

        stopButton.addEventListener('click', () => {
            clearInterval(timerId)
        })
    })
}

addTime()

