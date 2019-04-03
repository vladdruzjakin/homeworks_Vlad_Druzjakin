/*Обьект*/

// let obj1 = {product:"iphone"};
// obj1.price = 1000;
// obj1.currency = "dollar";
// obj1.details = {model:"",color:""};
// console.log (obj1);

/*Преобразование римитивов*/

//let a =  0 || 'string'; // string так как || записнается на правде
//let a = 1 && 'string'; // string та как 1 = true , и && пропускает и выдает string 
//let a = null || 25; // 25 так как null = 0 = false. || записнается на правде
//let a = null && 25;// null = 0 = false. && запинается на лжи 
//let a = null || 0 || 35;//35 = true || записнается на правде
//let a = null && 0 && 35;// null = 0 и это первая лож и останавливается на ней 

//console.log(a);

//var a = 12+14+'12';// 2612 неявное преобразование в string 
//var a = 3+2-'1';//4 все переход в число и на выходе number 
//var a = '3'+2-1;//31 неявное преобразование в string 
//var a = true + 2;//3 true =1. Все преобраз в number
//var a = +'10' + 1;//11 преобраз все к number 
//var a = undefined +2;// NaN не число. так как undefined ничего не содержит пустота. 
//var a = null + 5;// 5 null=0
//var a = true + undefined;//NaN не число. Все приним тип number true = 1 undefined ничего не содержит пустота. 
//console.log(a);


/*if else*/

					/*1*/
// let a = "";
//  if (a === "hidden"){
//  	a+=" visible";
//  	console.log(a);
//  }else {
//  	a="hidden";
//  	console.log(a);
//  }	


					/*2*/

// let a = -1;

// if( a == 0 ){
// 	a=1;
// 	console.log(a);
// }else if(a<0){
// 	console.log("less then zero");
// }else if(a > 0){
// 	a *=10;
// 	console.log(a);
// }

					/*3*/

// let car = {name:'Lexus', age:10 , create:2008, needRepair:false};
 
// if (car.age > 5){
// 	console.log("NeedRepair");
// 	car.needRepair = true;
// 	//console.log(car);
// }else {
// 	car.needRepair = false;
// 	//console.log(car);
// }

					/*4*/


// let item = {name:'Intel core i7', price:'100$',discount:'15%'};

// if(item.discount != ''){
// 	let a = parseInt(item.price);
// 	let b = parseInt(item.discount);
// 	let c = a/100 * b;
// 	let d = a-c;
// 	item.priceWithDiscount = d + '$';
// 	console.log(item);
// }else{

// } 

					/*5*/
					
// let product ={
// 	name: "Яблоко",
// 	price: "10$"
// };

// let min = 10;
// let max = 20;

// if (parseInt(product.price) >= min && parseInt(product.price) <= max){
// 	console.log(product.name);
// }else{
// 	console.log('товаров не найдено')
// };