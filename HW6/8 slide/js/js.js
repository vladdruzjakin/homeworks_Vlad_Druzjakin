console.log(document.head) //1
console.log(document.body) //2
console.log(document.body.children) //3
console.log(document.body.firstElementChild)//4
console.log(document.body.firstElementChild.children)//4a
//4b несколько вариантов 
//1 вар
console.log(Array.prototype.slice.call( document.body.firstElementChild.children, 1, -1))
//2 вар
const a = document.body.firstElementChild.firstElementChild.nextElementSibling;
const b = document.body.firstElementChild.lastElementChild.previousElementSibling;
console.log(a,b)
