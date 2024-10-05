// call by reference 

// function sayHello(){
//     return "Hello World"
// }

// let fn = sayHello;
// console.log(fn());


// callback Function 

// function sayHow(){
//     return "How are you"
// }

// function greet(fnMessage){
//     // console.log(fnMessage());
//     return fnMessage()
// }

// function sayWho(){
//     return function(){
//         return function(){
//             return "hey How are you"
//         }
//     }
// }


// let fn = sayWho();
// let wn = fn();
// // console.log(wn());


// const number = [1, 2, 3, 4];
// const say = number.map(num => num * 2)
// console.log(say);

// let input = "   JavaScript  "
// let output = "div"+ input.trim() + "div";
// console.log(output);

// const trim = str => str.trim();
// const wordInDiv = str => `<div>${str}</div>`;
// const toLowerCase = str => str.toLowerCase();

// const result = wordInDiv(toLowerCase(trim(" HELLO ")))
// console.log(result);

// const person = {
//     name: 'masud',
//     address: {
//         country: "bangladesh",
//         city: "Dhaka"
//     }
// }

// const upadated ={...person, name:'sakib'}
// console.log(upadated);
// upadated.address.city= "Madaripur";
// console.log(person);

const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(2)
console.log(index);
const added = [...numbers.slice(0, index), 4]
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);
// console.log(numbers);

