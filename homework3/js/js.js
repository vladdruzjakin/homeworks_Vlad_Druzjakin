/*Switch*/

         /*1*/

// let a = 'block';

// switch (a) {
//     case 'block': 
//         console.log("block");
//         break;
//     case 'none': 
//         console.log("none"); 
//         break;
//     case 'inline': 
//         console.log("inline"); 
//         break;
//     default: 
//         console.log("default");
// }

         /*2*/


// let a = 'hidden';

// a==='hidden' ? console.log(a+=' visible') : console.log(a='hidden');

					
				/*3*/

// let a = 5;

//  a==0 ? a=1 : 
//  a<0 ? console.log('less then zero') : 
//  a>0 ?  console.log(a*=10) : console.log('что то не то...');

        /*4*/

// let car = { name:'Lexus', age: 10, create: 2008, needRepair:false};

// car.age > 5 ? (console.log('needRepair'),car.needRepair = true ): car.needRepair = false ;

        /*5*/


// let a = ' i am in the easycode';
// let b = '';

// for (i = 0 ; i<a.length; i++) {

// 	b += (a[i-1] == ' ') ? a[i].toUpperCase() : a[i];
// }

// console.log(b)

        /*6*/

// let a = 'tseb eht ma i';
// let b = '';

// for(i=a.length-1;i>=0;i--){
// 	b += a[i];
// };
// console.log(b);

				/*7*/

// let a=10;
// for(i=a-1;i>=1;i--){
//  a*=i;
// };
// console.log(a);


				/*8*/

// let a = 'JavaScript is a pretty good language';
// let b = '';

// for (i = 0 ; i<a.length; i++) {

// 	b += (a[i-1] == ' ') ? (a[i].toUpperCase()) : a[i];
// 	b = b.split(' ').join('');

// }
// console.log(b)

				/*9*/

// let a =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let b =[];
// for (let value of a){
// 	if(value%2){
// 		b+=value + ' ';
// 	}
// }
// console.log(b);

				/*10*/

// let list ={
// 	name:'denis',
// 	work:'easycode',
// 	age: 29
// }

// for(let value in list){
// 	if(typeof list[value] === "string"){
// 		list[value] = list[value].toUpperCase();
// 	}
// }
// console.log(list);


