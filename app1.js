// function adder(a, b) {
//     return a + b;
// }
// const val1 = 10; 
// const val2 = 20;
// console.log(adder(val1, val2));
// console.log(adder(20, 30));

// const adj = ["super", "wonderful", "bad", "angry", "careful"];
 
// function myFun() {
//     const question = prompt("What is your name?");
//     const nameAdj = Math.floor(Math.random() * adj.length);
//     console.log(adj[nameAdj] + " " + question );
// }
// myFun();

// const val1 = 10;
// const val2 = 5;
// let operat = "-";
// function cal(a, b, op) {
//   if (op == "-") {
//     console.log(a — b);
//   } else {
//     console.log(a + b);
//   }
// }
// cal(val1, val2, operat);

// const myArr = [];
 
// for(let x=0; x<10; x++){
//   let val1 = 5 * x;
//   let val2 = x * x;
//   let res = cal(val1, val2, "+");
//   myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//   if (op == "-") {
//     return a - b;
//   } else {
//     return a + b;
//   }
// }

// let val = "1000";

// (function () {
//     let val = "100"; // local scope variable
//     console.log(val);
// })();

// let result = (function () {
//     let val = "Laurence";
//     return val;
// })();
// console.log(result);
// console.log(val);

// (function (val) {
//     console.log(`My name is ${val}`);
// })("Laurence");

// function calcFactorial(nr) { 
//     console.log(nr);
//     if (nr === 0) { 
//         return 1; 
//     } 
//     else { 
//         return nr * calcFactorial(--nr); 
//     } 
// } 
// console.log(calcFactorial(4));

// let start = 10; 
// function loop1(val) { 
//     console.log(val); 
//     if (val < 1) { 
//         return; 
//     } 
//     return loop1(val - 1); 
// } 
// loop1(start); 
// function loop2(val) { 
//     console.log(val); 
//     if (val > 0) { 
//         val--; 
//         return loop2(val); 
//     } 
//     return; 
// } 
// loop2(start);

// const test = function(val){
//     console.log(val);
// }
// test('hello 1');
 
// function test1(val){
//     console.log(val);
// }
// test1("hello 2");

// const main = function counter(i) {
//     console.log(i);
//     if (i < 10) {
//         return counter(i + 1);
//     }
//     return;
//     }
//     main(0);

//     const one  = ()=> console.log('one'); 
// const two  = ()=> console.log('two'); 
// const three = () =>{
//     console.log('three'); 
//     one(); 
//     two(); 
// }
// const four = () =>{
//     console.log('four');  
//     setTimeout(one,0); 
//     three();
// }
// four();