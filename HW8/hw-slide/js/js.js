//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в
// атрибуте data-text у кнопки.

const btnMessageOnClick = document.getElementById('btn-msg');

/*1-вар*/

// btnMessageOnClick.addEventListener('click', () => alert(btnMessageOnClick.dataset.text));

/*2-вар*/

btnMessageOnClick.addEventListener('click', () => alert(btnMessageOnClick.getAttribute('data-text')));

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши
// покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btnMessageOnClick.addEventListener('mouseover', function(event) {event.target.style.background = 'red'});
btnMessageOnClick.addEventListener('mouseout', function(event) {event.target.style.background = ''});



// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const body = document.body,
      idTag = document.querySelector("#tag");

body.addEventListener('click', (e)=>{idTag.textContent = `Tag: ${e.target.tagName}`});

//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 


const elementUl = document.querySelector('ul'),
      btnGenerate = document.querySelector('#btn-generate');

btnGenerate.addEventListener('click', ()=>{
    const createLi = document.createElement('li');
    let   elementUlLength = elementUl.children.length;
    createLi.textContent = `Item ${++elementUlLength}`;
    elementUl.appendChild(createLi);
})





