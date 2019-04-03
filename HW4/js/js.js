//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
//их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() 

var a = [1,2,3];

function multiple(a){
	var b = 1;
	if (a == 0){
		return 0;
		}
		for (i=0; i<a.length;i++){
		b *= a[i];
	}
		console.log(b);
}
multiple(a)


//Создать функцию, которая принимает строку и возвращает строку-перевертыш:
//reverseString(‘test’) 

let b = "vlad druzjakin";

function reversString (b) {
	let c = '';

	for(i=b.length-1;i>=0;i--){
		c += b[i];
	};
	console.log(c);
}
reversString(b)


// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

function getCodeStringFromText(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        output += str.charCodeAt(i) + " ";
    }
    return output;
}

console.log(getCodeStringFromText("hello"));


// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
// число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
// переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
// ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
// числа.



function randomgames(numb) {
	var numbuser = prompt("Ваше число от 1 - 10", 1);
	var max =10;
	var randomnumd = Math.floor(Math.random(max) * max+1);
  
  if (numbuser <=10){
	  	if (numbuser == randomnumd){
			alert("Вы выиграли");
		}else {
			let otv = "Вы не угадали ваше число " + numbuser + " а выпало число " +randomnumd;
			alert(otv);
		}
  }else{
  	alert("Вы ввели число больше 10")
  }
	
}
randomgames()


// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
// n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n){
	var arrNumb = [];
	
	for(i=1;i<=n;i++){
		arrNumb.push(i);
	}
	console.log(arrNumb);
}
getArray(10)



// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
// элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]


var arrdbl = [1,2,3];
function doubleArray(itemarr){
	var doublearr = itemarr.concat(itemarr);
	console.log(doublearr);
}
doubleArray(arrdbl)


//  Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
// массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.


var one = [1 ,2 ,3];
var two = ['a','b', 'c'];
var three = [5 ,6 ,7];

function changeCollection() {
	var vsearr=[];
  for (var i = 0; i <= arguments.length - 1; i++) {
    var array = arguments[i];
    array.shift();  
    vsearr.push(array);
  }
  console.log(vsearr);
}

changeCollection(one, two, three)
//console.log(one, two, three); 


//  Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
// значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
// массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , 
// {name: “Ivan”, age: “20”, gender: “male”} ]

var users = [
  {name:  'sasha', gender:  'male'},
  {name:  'Sveta', gender:  'female'},
  {name:  'Valera', gender:  'male'},
  {name:  'Val', }
];

function funcGetUsers(a,b,c){

 var usersortmale = [];
 var usersortfemale = [];
 var usersortnogender = [];

	for (i=0 ; i<=a.length-1;i++){
		if(a[i].gender){

			if(a[i].gender === c){

				usersortmale.push(a[i]);

			}else{
				usersortfemale.push(a[i]);
			}
		}else{
			usersortnogender.push(a[i]);
			console.log('Кто то у нас безполый ', usersortnogender )
		}
	}
	console.log('Массив с male ' ,usersortmale);
	console.log('Массив с female ' , usersortfemale);
}
funcGetUsers(users, 'gender', 'male')