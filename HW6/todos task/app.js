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

function generateId() {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    // for (let char of words) {
    //     let index = Math.floor(Math.random() * words.length);
    //     id += words[index];
    // }
    for (var i = 0; i <= 5; i++) {
      
        let index = Math.floor(Math.random() * words.length);
        id += words[index];
    }

    return id;
}

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    storage.todos.push(newTask);

    return storage.todos;
}

addNewTodoToStorage('My title 1', 'My text 1');
addNewTodoToStorage('My title 2', 'My text 2');
addNewTodoToStorage('My title 3', 'My text 3');
addNewTodoToStorage('My title 4', 'My text 4');

function deleteTodoFromStorage(id) {
    if (!id) return console.log('Передайте id задачи');

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) return console.log('id несуществуе');

    const removedTask = storage.todos.splice(taskIndex, 1);

    return removedTask;
}

function editTaskStorage(id, title, text) {
    if (!id) return console.log('Введите id');
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    let editedTask = storage.todos.find((item) => item.id === id)

    editedTask.title = title
    editedTask.text = text

    return editedTask
}
  // for (var i = 0; i <= storage.todos.length; i++) {
    
  //   if (storage.todos[i].id === id){

  //    storage.todos[i].title = title;

  //    storage.todos[i].text = text;

  //   return storage.todos

  //    }

  //   }  
// эти строки лучше выполнять в консоли браузера, когда вы сможете 
// из массива storage.todos взять уникальный id тасочки 
// editTaskStorage('some id', 'new title', 'new text')
// console.log(storage.todos)

// или можете практиковаться на storage.todos[0].id :)