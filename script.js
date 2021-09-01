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








