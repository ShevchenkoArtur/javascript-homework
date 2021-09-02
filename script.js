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

// task3
const wrapperDiv = document.createElement('div')
const footerDiv = document.createElement('div')
const mainDiv = document.createElement('div')
const h1 = document.createElement('h1')
const firstPara = document.createElement('p')
const secondPara = document.createElement('p')
const lastPara = document.createElement('p')

wrapperDiv.id = 'wrapper'
footerDiv.id = 'footer'
mainDiv.id = 'main'

h1.innerText = 'Footer'
firstPara.innerText = 'I am first paragraph'
secondPara.innerText = 'I am second paragraph'
lastPara.innerText = 'I am last paragraph'

document.body.append(wrapperDiv)
wrapperDiv.append(footerDiv, mainDiv)
footerDiv.append(h1)
mainDiv.append(firstPara, secondPara, lastPara)

const changeBgColorForLastChild = () => {
    const lastChild = mainDiv.lastChild
    lastChild.setAttribute('style', 'background-color: red')
}

const swapFooterWithMain = () => {
    footerDiv.remove()
    wrapperDiv.append(footerDiv)
}

changeBgColorForLastChild()
swapFooterWithMain()

// task4
const createOrderedList = () => {
    const INGREDIENTS = {
        "cocoa": ["cocoa powder", "milk", "sugar"],
        "cappuccino": ["milk", "coffee"],
        "smoothie": ["banana", "orange", "sugar"],
        "matcha frappe": ["matcha", "milk", "ice"]
    }

    const arrOfDrinks = Object.keys(INGREDIENTS)

    const h1 = document.createElement('h1')
    const ul = document.createElement('ul')

    h1.innerText = 'Menu'
    ul.id = 'menu'

    document.body.append(h1, ul)

    arrOfDrinks.map(el => {
        const li = document.createElement('li')
        li.innerText = el
        ul.append(li)
    })

    ul.addEventListener('click', (e) => {
        const ol = document.createElement('ol')

        INGREDIENTS[e.target.textContent].map(el => {
            const li = document.createElement('li')
            li.innerText = el
            ol.append(li)
        })

        e.target.append(ol)

        Array.from(ul.childNodes).map(el => {
            if (el.childNodes[0].textContent !== e.target.childNodes[0].textContent && el.childNodes.length > 1) {
                el.childNodes[1].remove()
            }
        })
    })
}

createOrderedList()