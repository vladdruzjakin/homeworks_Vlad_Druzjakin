// //1  Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
// элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child) {
	if (child.parentNode.parentNode.parentNode===parent){
    return true;
	}else {
		return false
	}
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const links = document.links;

for (let link of links) {
	if (link.parentNode.tagName!='LI') {
		console.log(link)
	}
}

// Array.prototype.slice.call(document.getElementsByTagName('a')).map((v)=>{if (v.parentNode.tagName!='LI') console.log(v)})

//3 Найти элемент, который находится перед и после списка ul

let divByQuerySelector = document.querySelector('ul');
console.log(divByQuerySelector.previousElementSibling,divByQuerySelector.nextElementSibling)

//4 Посчитать количество элементов li в списке
console.log(divByQuerySelector.children.length)