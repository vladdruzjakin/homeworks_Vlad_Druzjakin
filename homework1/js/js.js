/* Строки. Задачи*/

let str = 'some test string';

alert( str.length ); //узнали длинну строки

alert( str[0] + str[15]); // 1 и посл. буква

alert( str[0].toUpperCase() + str[15].toUpperCase()); // 1 и посл. буква в верх. регистр

alert(str.indexOf("string")); // Положение слова string

alert(str.indexOf(" ", 5)); // Положение второго пробела

alert(str.substr(5,4)); // Строка с 5-го символа длиной 4 буквы 

alert(str.substring(5,9)); //строка с 5-го по 9 символ 

str = str.slice(0,-6); //-6 символов в конце 
alert(str);

let a = 20;
let b = 16;
let date = '' + a +b;
alert(date);


/* Числа. Задачи.*/

alert(Math.PI.toFixed(2));

let arry = [15, 11, 16, 12, 51, 12, 13, 51];
alert(Math.min.apply(null, arry));
alert(Math.max.apply(null, arry));



alert(Math.random().toFixed(2));



/*2 варианта рандома*/

// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
//   }
// alert( randomInteger(0, 10) );


var max =10;
var random = Math.floor(Math.random(max) * max+1);
alert(random);


let num = 0.6+0.7;
alert(num.toFixed(1));


let strnum = '100$';
alert(parseInt(strnum));