// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0


function minus(x = 0){
    return function (y = 0){
        return x-y;
    }
}

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между
// вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

let multiplyMaker = function (x){
    let counter = x;
    return function (y){
        counter *= y;
       return counter;
    }
}
const multiply = multiplyMaker(2);

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const workString = (function () {
    let element;
    function installString(string =''){
        element = typeof string === 'number' ? string.toString() : string;
    }
    function getString(){
        return element
    }
    function getLength(){
        return element.length
    }
    function reverseString(){
        return element.split('').reverse().join('');
    }
    return {
        installString,
        getString,
        getLength,
        reverseString
    }
})();


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и
// возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно
// храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


const CalcMethod = (function (){
    let result; 

    function checkOnNumber (val){
        if (typeof (val) === 'number'){
            return val
        }
        return val = 0;
    }
    function setValue(val){
        result = checkOnNumber(val)
        return this
    }
    function plus(val){
        result += checkOnNumber(val)
        return this
    }
    function mult(val){
        result *= checkOnNumber(val)
        return this 
    }
    function minus(val){
        result -= checkOnNumber(val)
        return this 
    }
    function divis(val){
        result /= checkOnNumber(val)
        return this
    }
    function exponent(val){
        result = Math.pow(result, checkOnNumber(val))
        return this
    }
    function getResult(){
        result = +result.toFixed(2);
        return result
    }
    return{
        setValue,
        plus,
        mult,
        minus,
        divis,
        exponent,
        getResult,
        checkOnNumber
    }
})();