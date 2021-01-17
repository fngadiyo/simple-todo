const fs = require('fs')
const prompt = require('prompt-sync')()

const command = prompt('write your command: ')

const checkCommand = () => {
    if (command === 'create') {
        createTodoFile()
    }
    if (command === 'add') {
        addTodo()
    }
    if (command === 'delete') {
        deleteTodoFile()
    }
    if (command === 'view') {
        viewTodo()
    }
}

const createTodoFile = () => {
    fs.appendFileSync('todo.txt')
}

const addTodo = () => {
    const todo = prompt('what will you do: ')
    fs.appendFileSync('todo.txt', todo + '\n')
}

const deleteTodoFile = () => {
    fs.unlinkSync('todo.txt')
}

const viewTodo = () => {
    console.log(fs.readFileSync('todo.txt').toString())
}

checkCommand()