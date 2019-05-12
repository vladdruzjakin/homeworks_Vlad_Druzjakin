/*1*/

const arrElement = ['a','b','c','d','e']; 

function restFuncFirstVariant (arr) { 
    const [ first, ...other ] =arr;
    return {first,other}
}

function restFuncTwoVariant () { 
    const [ first, ...other ] = arguments[0];
    return {first,other}
}

function restFuncThreeVariant ([first, ...other]) { 
    return {first,other}
}

/*2*/

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};
   
function getInfo({name = 'Unknown',info:{partners:[comp1,comp2]}}){
    return `Name: ${name} Partners: ${comp1} ${comp2}`
}

/*3*/

let sum = (...item) => {
    const params = Array.from(item);
    if (!params.length) return 0;
    return params.reduce((prev, next)=>{ return prev + next; });
}
/*4*/

const rectangle = {
    width: 4,
    height: 4, 
    getSquare: function () {return parseInt(this.width * this.height)}
};
/*5*/

const price = {
    price: 10,
    discount: '15%',
    getPrcie:function (){return this.price},
    getPriceWithDiscount: function () {return ( parseInt(this.price) * ((100 - parseInt(this.discount)) * 0.01))}
};
/*6*/

const ObjectHeight = {
    height: 10,
    plusOne: function (){return ++this.height}
};
/*7*/

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2
        return this},
    plusOne: function () {
        ++this.value
        return this},
    minusOne: function () {
        --this.value
        return this},
};
   
/*8*/

const numberOfProducts = {
    retailPrice: 50,
    numberOfGoods: 2,
    totalCost: function () {
    return (this.retailPrice * this.numberOfGoods)
    }
};
/*9*/

const numberOfProductsTwo = {
    retailPrice: 60,
    numberOfGoods: 5,
};

numberOfProducts.totalCost.call(numberOfProductsTwo)

/*10*/

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

getSquare.call(sizes)

/*11*/

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};
   let getElementHeight = element.getHeight.bind(element);
   getElementHeight();
   