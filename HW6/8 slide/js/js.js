const bodyBlock = document.body;
//1
console.log(document.head) 
//2
console.log(bodyBlock) 
//3
console.log(bodyBlock.children) 
//4
console.log(bodyBlock.firstElementChild)
//4a
console.log(bodyBlock.firstElementChild.children)
//4b несколько вариантов 
//1 вар
console.log(Array.prototype.slice.call( bodyBlock.firstElementChild.children, 1, -1))
//2 вар
const getElfirst = bodyBlock.firstElementChild.firstElementChild.nextElementSibling,
			getEllast = bodyBlock.firstElementChild.lastElementChild.previousElementSibling,
			result = [getElfirst,getEllast ]
console.log(result)
