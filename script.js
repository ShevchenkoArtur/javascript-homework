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
const createMarkup = () => {
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
}


const changeBgColorForLastChild = () => {
    const main = document.querySelector('#main')
    const lastChild = main.lastChild

    lastChild.setAttribute('style', 'background-color: red')
}

const swapFooterWithMain = () => {
    const footer = document.querySelector('#footer')
    const wrapper = document.querySelector('#wrapper')

    footer.remove()
    wrapper.append(footer)
}

createMarkup()
changeBgColorForLastChild()
swapFooterWithMain()

// task4
const createListMarkup = () => {
    const INGREDIENTS = {
        "cocoa": ["cocoa powder", "milk", "sugar"],
        "cappuccino": ["milk", "coffee"],
        "smoothie": ["banana", "orange", "sugar"],
        "matcha frappe": ["matcha", "milk", "ice"]
    };

    const h1 = document.createElement('h1')
    h1.innerText = 'Menu'

    const ul = document.createElement('ul')
    ul.id = 'menu'

    const style = document.querySelector('style')
    style.append(document.innerHTML = '.close {display: none} .open {display: block!important}')

    for (let key in INGREDIENTS) {
        const li = document.createElement('li')
        const ol = document.createElement('ol')

        ol.classList.add('close')
        li.innerText = key

        INGREDIENTS[key].map(el => {
            const li = document.createElement('li')
            li.innerText = el
            ol.append(li)
        })

        li.append(ol)
        ul.append(li)
    }

    document.head.append(style)
    document.body.append(h1, ul)
}

const addListEventListener = () => {
    const menu = document.querySelector('#menu')
    let lastSelectedItem

    const showList = (target) => {
        if (lastSelectedItem) {
            if (lastSelectedItem === target) {
                lastSelectedItem.classList.remove('open')
                lastSelectedItem = null
                return
            } else {
                lastSelectedItem.classList.remove('open')
                lastSelectedItem = target
                lastSelectedItem.classList.add('open')
            }
        }

        lastSelectedItem = target
        lastSelectedItem.classList.add('open')
    }

    menu.addEventListener('click', (e) => {
        let target = e.target.childNodes[1]
        showList(target)
    })
}

createListMarkup()
addListEventListener()