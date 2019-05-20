// Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:

// const comp = new Component('span');

class Component{
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}
const comp = new Component('span');
console.log(comp)

// Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class ComponentMethod{
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text = 'Text') {
       this.node.textContent = text;
    }
}
const compMethod = new ComponentMethod('p');
console.log(compMethod)



// Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. 
// Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.


class Calc{
    constructor(number = 0){
        this.number =number;
    }
    plus(val){
        if (typeof (val) === 'number'){
            this.number += val
            return this 
        }
    }
    mult(val){
        if (typeof (val) === 'number'){
            this.number *= val
            return this  
        }
    }
    minus(val){
        if ( typeof (val) === 'number'){
            this.number -= val
            return this  
        }
    }
    divis(val){
        if ( typeof (val) === 'number'){
            this.number /= val
            return this     
        }
    }
    get numberValue() {
        return this.number;
    }
    set numberValue(newValue) {
        if (typeof newValue === 'number') {
            this.number = newValue;
        }
    }
}
const calcResult = new Calc();



