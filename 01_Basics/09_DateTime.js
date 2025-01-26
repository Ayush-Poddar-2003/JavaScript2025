/* Dates calculated from jan 1 1970 => Shown in milliseconds
Date is an object in javascript*/

// const myDate = new Date()
// console.log(myDate); //2025-01-25T16:52:33.814Z ~ Non Readable hence into string
// console.log(myDate.toString()); //Sat Jan 25 2025 22:22:33 GMT+0530 (India Standard Time)
// console.log(typeof myDate)  //Object

//-----------------------------------

// let selfDate = new Date(2026,0,5) //YYYY M D => Months start from 0 in Js
// //Or
// selfDate = new Date("01,11,2026")

// console.log(selfDate)
// console.log(selfDate.toString())

//--------------------------------------

//Miliseconds conversion and usecases

let myCreatedDate = new Date("1-14-2026") //Will convert into miliseconds
console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp/1000); //into seconds



