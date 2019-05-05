// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }


let storage = {
    todos: []
};

// UI Elements
const formCol = document.querySelector('.form-col');
const table = document.querySelector('.table tbody');
const form = document.forms['addTodoForm'];
const title = form.elements['title'];
const text = form.elements['text'];
const submitBtn = form.elements.submitBtn;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!title.value || !text.value) {
        alertMessage('No title or text', className = 'alert-danger')
        // alert('No title or text') // danger
        return;
    }

    const dataTaskId = form.dataset.taskId

    if (dataTaskId) {
        editTaskStorage(dataTaskId, title.value, text.value)
        submitBtn.innerText = 'Add task'
        this.removeAttribute('data-task-id')
        alertMessage('Todo was edited')
        // alert('Todo was edited') // info
    } else {
        addNewTodoToStorage(title.value, text.value);
        alertMessage('New todo was added')
        // alert('New todo was added') // info
    }

    this.reset()
})

table.addEventListener('click', function ({
    target
}) {
    if (target.classList.contains('fa-trash')) {
        const id = target.closest('[data-id]').dataset.id
        deleteTodoFromStorage(id)
    }

    if (target.classList.contains('fa-edit')) {
        const id = target.closest('[data-id]').dataset.id
        editTodo(id)
    }
})

function editTodo(id) {
    const task = storage.todos.find(todo => todo.id === id)
    if (task) {
        title.value = task.title
        text.value = task.text
        submitBtn.innerText = 'Edit task'
        form.setAttribute('data-task-id', id)
    }
}

function generateId() {
    const template = 'xxxx-xxxx-xxxx-xxxx';
    const arrayFromTemplate = template.split('')
    return arrayFromTemplate.reduce((init, char) => {
        if (char === '-') return init += char
        return init += Math.floor(Math.random() * 10)
    }, '')
}

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    // Добавим в разметку
    addNewTodoToView(newTask);

    storage.todos.push(newTask);
}

function findTaskIndexByTaskId(id) {
    if (!id) {
        console.log('Передайте id задачи');
        return -1
    }

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) console.log('id несуществуе');

    return taskIndex;
}

function deleteTodoFromStorage(id) {
    const taskIndex = findTaskIndexByTaskId(id)
    if (taskIndex === -1) return;

    // Удалим из разметки
    deleteTodoFromView(id);

    storage.todos.splice(taskIndex, 1);
}

function editTaskStorage(id, title, text) {
    const taskIndex = findTaskIndexByTaskId(id)

    if (taskIndex === -1) return;

    const todo = storage.todos[taskIndex]
    todo.title = title
    todo.text = text

    // создать отдельную ф-цию
    const tr = document.querySelector(`[data-id="${id}"]`)
    const [titleEl, textEl] = tr.children

    titleEl.innerHTML = title
    textEl.innerHTML = text
}

function deleteTodoFromView(id) {
    const tr = document.querySelector(`[data-id="${id}"]`)
    tr.parentElement.removeChild(tr)
    alertMessage('Todo was deleted')
    // alert('Todo was deleted') // info
}

function addNewTodoToView(task) {
    const template = todoTemplate(task)
    table.insertAdjacentHTML('afterbegin', template)
}

function todoTemplate({
    id,
    title,
    text
}) {
    return `
    <tr data-id="${id}">
        <td>${title}</td>
        <td>${text}</td>
        <td>
            <i class="fas fa-trash"></i>
            <i class="fas fa-edit"></i>
        </td>
    </tr>`
}

function alertMessage(message, className = 'alert-info') {
    removeAlert()
    const template = alertTemplate(message, className)
    formCol.insertAdjacentHTML('afterbegin', template)
    setTimeout(removeAlert, 3000);
}

function alertTemplate(message, className) {
    return `<div class="alert ${className}">${message}</div>`
}

function removeAlert() {
    const curretAlert = document.querySelector('.alert')

    if (curretAlert) {
        formCol.removeChild(curretAlert)
    }

}