// //1  Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
// элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child) {
	return parent.contains(child) ? true : false;
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let allLinksNotFromList = document.querySelectorAll(':not(li) > a');
console.log(allLinksNotFromList)

// const links = document.links;
// for (let link of links) {
// 	if (link.parentNode.tagName!='LI') {
// 		console.log(link)
// 	}
// }

// Array.prototype.slice.call(document.getElementsByTagName('a')).map((v)=>{if (v.parentNode.tagName!='LI') console.log(v)})

//3 Найти элемент, который находится перед и после списка ul

let ulByQuerySelector = document.querySelector('ul');
console.log(ulByQuerySelector.previousElementSibling,ulByQuerySelector.nextElementSibling)

//4 Посчитать количество элементов li в списке

console.log(ulByQuerySelector.children.length)