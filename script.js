const leftInput = document.querySelector('#left-input')
const rightInput = document.querySelector('#right-input')
const result = document.querySelector('#result')
const sym = document.querySelector('#sym')

const buttons = document.querySelectorAll('.button')

const plus = document.querySelector('#plus')


const addTodo = () => {
    const li = document.createElement('li')
    li.textContent = result.value
    result.value = ''

}

plus.addEventListener('click', () => {
    result.value = +leftInput.value + +rightInput.value
    sym.textContent = '+'
    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' + ' + +rightInput.value + ' = ' + +result.value
    todo.append(li)
})


const minus = document.querySelector('#minus')

minus.addEventListener('click', () => {
    result.value = +leftInput.value - +rightInput.value
    sym.textContent = '-'
    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' - ' + +rightInput.value + ' = ' + +result.value
    todo.append(li)

})

const multiply = document.querySelector('#multiply')

multiply.addEventListener('click', () => {
    result.value = (leftInput.value * rightInput.value).toFixed(5)
    sym.textContent = '*'
    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' * ' + +rightInput.value + ' = ' + +result.value
    todo.append(li)
})

const divide = document.querySelector('#divide')


divide.addEventListener('click', () => {
    if (leftInput.value === '0' || rightInput.value === '0') {
        confirm('ты что тупой')
    } else {
        result.value = (leftInput.value / rightInput.value).toFixed(5)
    }
    sym.textContent = '*'
    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' / ' + +rightInput.value + ' = ' + +result.value
    todo.append(li)
})


const degree = document.querySelector('#degree')

degree.addEventListener('click', () => {
    result.value = (leftInput.value ** rightInput.value).toFixed(5)
    sym.textContent = '*'
    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' ** ' + +rightInput.value + ' = ' + +result.value
    todo.append(li)
})


const root = document.querySelector('#root')

root.addEventListener('click', () => {

    result.value = Math.sqrt(+leftInput.value).toFixed(5)

    sym.textContent = '√'

    const li = document.createElement('li')
    li.textContent = +leftInput.value + ' % ' + '2' + ' = ' + +result.value
    todo.append(li)
})


const disbut = (b) => Array.from(buttons).forEach(it => it.disabled = b)


leftInput.addEventListener('input', () => {
    if (leftInput.value === '' || rightInput.value === '') {
        disbut(true)

    } else {
        disbut(false)

    }
    addTodo()
})

rightInput.addEventListener('input', () => {
    if (leftInput.value === '' || rightInput.value === '') {
        disbut(true)
        degree.disabled = true
        root.disabled = true
    } else {
        disbut(false)
        degree.disabled = false
        root.disabled = false
    }
    addTodo()
})







const oneResult = document.querySelector('#oneResult')

const inputOne = document.querySelector('#inputOne')


const max = document.querySelector('#max')


const min = document.querySelector('#min')


//
// min.addEventListener('click', () => {
//
//     oneResult.value = Math.min(inputOne.value.split(' '))
//
// })


const todo = document.querySelector('#todo')







const delBtn = document.querySelector('#delete')



delBtn.addEventListener('click', () => {
    if (confirm('Ты уверен?'))
        todo.innerHTML = ''
        todo.value = ''
})



max.addEventListener('click', () => {
    oneResult.value = Math.max(...inputOne.value.split(' '))
addHistory()
})


min.addEventListener('click', () => {
    oneResult.value = Math.min(...inputOne.value.split(' '))
addHistory()
})


inputOne.addEventListener('keydown', (e) => {
    if(!(e.key >= 0 && e.key <= 9) && e.key !== 'Backspace' && e.key !== '-' ){
        e.preventDefault()
    }
})

const addHistory = () => {
    const li  = document.createElement('li')
    li.textContent = `${inputOne.value}  => ${oneResult.value}`
    todo.append(li)
}
