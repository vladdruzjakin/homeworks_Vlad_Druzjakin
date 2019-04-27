// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки


var arrString = ['my', 'name', 'is', 'Trinity'];
var arrNumb = [10, 20 , 30];
var arrUsers = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
var arrRevers = ['abc', '123'];

function firstFunc(arr, callback) {
	return "New value: " +  callback(arr)
}

function FuncArrString (arr){

	for (let i = 0; i < arr.length; i++) {
	    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	string = arr.join('');

	return string
}

function FuncArrNumbMult(arr){
	return arr.map(function(currentEl){
		return currentEl * 10
	})
}

function FuncArrUsers(arr){
	return arr.map(function(currentEl){
		return `${currentEl.name} is ${currentEl.age}`;
	})
}

function FuncArrRevers(arr){
	return arr.map(function(currentEl){
		let len = currentEl.length;
		let arr = [];
		while (len--){
			arr += currentEl[len];
		}
		return arr 
	})
}


console.log(firstFunc(arrString,FuncArrString))
console.log(firstFunc(arrNumb,FuncArrNumbMult))
console.log(firstFunc(arrUsers,FuncArrUsers))
console.log(firstFunc(arrRevers,FuncArrRevers))

//----------------------------------------------------------------------------------

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
// аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
// callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить
// число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
// массив. 

var arrNumbRand = [6, 6, 10, 12];

function FuncEvery(arr, callback){
	let a = arr.length;
	let b = callback.length;
	if(a === b){
		return true
	}else{
		return false
	}
}

function FuncArrNumb(arr){
	let newArrT =[];
	let newArrF =[];
	let bool = arr.forEach(function(currentEl) {
  	if(currentEl > 5){
  		newArrT.push(currentEl)
  	}else {
  		newArrF.push(currentEl)
  	}
	})
	return newArrT
}
console.log(FuncEvery(arrNumbRand, FuncArrNumb(arrNumbRand)))

//----------------------------------------------------------------------------------
// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

var arrInit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrNew = [];
arrInit.forEach(function(currentEl){
	if (currentEl%2 !== 0){
		arrNew.push({digit: currentEl, odd: true});
	}else{
		arrNew.push({digit: currentEl, odd: false});
	}
})
console.log(arrNew)

//----------------------------------------------------------------------------------

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
// вернуть false.

var arrSome = [12, 4, 50, 1, 0, 18, 40];

var resultSome = arrSome.every(function(currentEl){
	if (currentEl === 0){
		return false
	}else {
		return true
	}
})
console.log (resultSome)

//----------------------------------------------------------------------------------
//  Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
// больше 3х букв. Если да - вернуть true

var arrString = ['yes', 'hello', 'no', 'easycode', 'what'];

var resultString = arrString.some(function(currentEl){
	if (currentEl.length > 3){
		return true 
	}
})
console.log(resultString)

//-----------------------------------------------------------------------------------

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
// в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


let arrStringObj = [
			{char:"a",index:12}, 
			{char:"w",index:8}, 
			{char:"Y",index:10}, 
			{char:"p",index:3}, 
			{char:"p",index:2},
			{char:"N",index:6}, 
			{char:" ",index:5}, 
			{char:"y",index:4}, 
			{char:"r",index:13}, 
			{char:"H",index:0},
			{char:"e",index:11}, 
			{char:"a",index:1}, 
			{char:" ",index:9}, 
			{char:"!",index:14},
			 {char:"e",index:7}];

function NewStringArr(arr) {

	let NewArrStringObj =  arr.sort(function (prev, next) {
  	 return prev.index - next.index ;
		});

	let resultStringObj = NewArrStringObj.reduce(function(sum, current) {
			return sum + current.char;
		}, '');

	return resultStringObj;
};
console.log(NewStringArr(arrStringObj));

//------------------------------------------------------------------------------------------------------------

// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']]


let arrSort =[ [14, 45], [1], ['a', 'c', 'd'] ];

let NewArrSort = arrSort.sort(function(prev, next){
	return prev.length - next.length;
})
console.log(NewArrSort);

//-------------------------------------------------------------------------------------------------------------

// Есть массив объектов:
// [
//  {cpu: 'intel', info: {cores:2, сache: 3}},
//  {cpu: 'intel', info: {cores:4, сache: 4}},
//  {cpu: 'amd', info: {cores:1, сache: 1}},
//  {cpu: 'intel', info: {cores:3, сache: 2}},
//  {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Отсортировать их по возрастающему количеству ядер (cores).

let arrCore =	[
							 {cpu: 'intel', info: {cores:2, сache: 3}},
							 {cpu: 'intel', info: {cores:4, сache: 4}},
							 {cpu: 'amd', info: {cores:1, сache: 1}},
							 {cpu: 'intel', info: {cores:3, сache: 2}},
							 {cpu: 'amd', info: {cores:4, сache: 2}}
							];

let NewArrCore = arrCore.sort(function(prev, next){
	return prev.info.cores - next.info.cores;
});
console.log(NewArrCore);

//-----------------------------------------------------------------------------------------------------------------

//  Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
// вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
// дорогим:
// let products = [
//  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
 {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
 {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
 {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
 {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
	
	let filterProducts = []
function filterCollection(products, minPrice, maxPrice) {

	filterProducts = products.filter(function(product){
		return product.price === minPrice||product.price > minPrice;
	})

	filterProducts = filterProducts.filter(function(product){
		return product.price === maxPrice||product.price < maxPrice;
	})
	filterProducts.sort(function(prev, next){
		return prev.price - next.price;
	})
	}
	filterCollection(products, 15, 25)
	console.log(filterProducts)


