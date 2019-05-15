//1.Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины.
//Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины
//(год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!
 
function Car(model, age) {
 
    this.model = model;
    this.age = age;
    this.getModel = function () { return this.model.charAt(0).toUpperCase() + this.model.slice(1); }
    this.getYear = function () { return new Date().getFullYear() - this.age; }
}
 
let lexus = new Car('lexus', 2);
console.log(lexus.getModel());
console.log(lexus.getYear());
 
//2.Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш,
//или заменить все символы их цифровым представлением, или любой другой метод).
//Конструктор при инициализации получает строку и имеет следующие методы:
    // a. показать оригинальную строку
    // b. показать зашифрованную строку
    // Строки не должны быть доступны через this, только с помощью методов.
 
function strCoder(str) {
 
    this.str = str;
    this.getStr = function () { return this.str; }
    this.getCodeStr = function () { return this.str.split('').reverse().join(''); }
}    
   
let codeStr = new strCoder('qwerty');
console.log(codeStr.getStr());
console.log(codeStr.getCodeStr());