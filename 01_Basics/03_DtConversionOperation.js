// DATATYPE CONVERSION IN Js

let score = "69"
console.log(typeof score)   //string

let valueInInteger = Number(score) //we use capital letter for conversions
console.log(typeof valueInInteger)  //number

let name = "Ayush69"
let ModifiedName = Number(name)
console.log(typeof ModifiedName)    //number
console.log(ModifiedName)  //Will show "Nan" which is also a datatype


/** NUMBER conversions
 * "33" => 33
 * "3a" => NaN
 * true => 1
 * false => 0
 * 
 * BOOL CONVERSIONS
 * 0 => false
 * 1 => true
 * "" => false
 * "a" => true
 */

//****************OPERATIONS*********** */

let value = 3
let negValue = -value
console.log(negValue); //-3

console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32
console.log(+true);         //1
console.log(+"");           //0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion