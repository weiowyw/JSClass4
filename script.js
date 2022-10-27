

// const arr = [];
// let c = 0;
// do {
//     c = parseInt(prompt("Enter your array's length: "));
// }while(c <= 0 || isNaN(c));
// console.log(c);
// for(let i = 0; i < c; i++){
//     let value = prompt('Enter element # ' + (i+1));
//     arr.push(value);
// }
// console.log(arr);
//
// arr.sort();
//
// console.log(arr);
//
// arr.splice(2, 3);
//
// console.log(arr);


//a.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
// if(arr[i] > 0){
//     amount++;
//     sum+=arr[i];
// }
// }
// console.log('The amount of positive numbers is ' + amount + ' and the sum of them is ' + sum);


//b.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let min = arr[0];
// let number = 1;
//
// for(let i = 1; i < arr.length - 1; i++){
//     if(arr[i] < min){
//         min = arr[i];
//         number = i + 1;
//     }
// }
// console.log('The min number is ' + min + ' and the # is ' + number);


//c.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let max = arr[0];
// let number = 1;
//
// for(let i = 1; i < arr.length - 1; i++){
//     if(arr[i] > max){
//         max = arr[i];
//         number = i + 1;
//     }
// }
// console.log('The max number is ' + max + ' and the # is ' + number);


//d.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0){
//         amount++;
//     }
// }
// console.log('The amount of negative numbers is ' + amount);


//e.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] % 2 !== 0){
//         amount++;
//     }
// }
// console.log('The amount of even positive numbers is ' + amount);


//f.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] % 2 === 0){
//         amount++;
//     }
// }
// console.log('The amount of odd positive numbers is ' + amount);


//g.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] % 2 === 0){
//         amount++;
//         sum += arr[i];
//     }
// }
// console.log('The amount of odd positive numbers is ' + amount + ' and the sum of them is ' + sum);


//h.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let amount = 0;
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] % 2 !== 0){
//         amount++;
//         sum += arr[i];
//     }
// }
// console.log('The amount of even positive numbers is ' + amount + ' and the sum of them is ' + sum);


//i.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
//
// let product = 1;
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0){
//         product = product * arr[i];
//     }
// }
// console.log('The product is ' + product);


//j.
// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//
// let max = arr[0];
//
// for(let i = 1; i < arr.length - 1; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log('The max number is ' + max);
//
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== max){
//         arr[i] = 0;
//     }
// }
//
// console.log(arr);