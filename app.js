// Practice exercise 5.1

// let max = 5;
// let roundedNumber = Math.floor(Math.random() * max) + 1; 
// let correct = false;
// while(!correct){
//     let userNumber = +prompt("Enter number between 1 to 5");
//     if(userNumber === roundedNumber ){
// correct = true;
//     console.log("You got it. The number is  " + roundedNumber);
// } else if (userNumber > roundedNumber ) {
//     console.log("Too high");
// } else {
//     console.log("Too Low");
// }
// }

// Practice exercise 5.2

// let counter = 0;
// let step = 2;
// do {
//     console.log(counter);
//     counter += step;
// }
// while (counter <= 100); 

// }
// }

// Practice exercise 5.3

// let myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${x}`, status: stat
//     };
//     myWork.push(temp);
// }
// console.log(myWork);

// Practice exercise 5.4

// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < cols; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

// Practice exercise 5.5

// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//     if (counter % 8 == 0) {
//         if (row != undefined) {        
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
 
// }
// console.table(grid);

// Practice exercise 5.6

// const myArray = [];
// for (let x = 0; x < 10; x++) {
//     myArray.push(x + 1);
// }
// console.log(myArray);
 
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }
// for (let val of myArray) {
//     console.log(val);
// }

// Practice exercise 5.7

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for (let prop in obj) {
//     console.log(prop, obj[prop]);
// }
// const arr = ["a", "b", "c"];
// for (let w = 0; w < arr.length; w++) {
//     console.log(w, arr[w]);
// }
 
// for (el in arr) {
//     console.log(el, arr[el]);
// } 

// Practice exercise 5.8

// let output = ""; 
// let skipThis = 7; 
// for (let i = 0; i < 10; i++) { 
//   if (i === skipThis) { 
//     continue; 
//   } 
//   output += i; 
// } 
// console.log(output);
