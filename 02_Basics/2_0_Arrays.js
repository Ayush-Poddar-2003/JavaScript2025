const arr = [0, 1, 2, 3, 4, 5, true, "Ayush"]
// Arrays in js need not contain similar type of data only

const arr2 = new Array(2,4,6,8,10) //Other method of creation

// arr2.push(1)
// arr2.pop()
// arr2.unshift(2) //Inserts from front and moves every other back
// arr2.shift() //Removes from front, moves everyone to front
// console.log(arr2.includes(40)); //check if data present or not
// console.log(arr2.indexOf(8)); //gives the index

// const arr3 = arr2.join() //Copies element as a string
// console.log(arr2)
// console.log(arr3)

// ----------------- SPLICE VS SLICE ------------------

console.log("Old Array : ", arr2)
const arr5 = arr2.slice(1,3)
console.log("After slice Old Array : ", arr2)
console.log("New Array : ", arr5)

console.log("\nOld Array : ", arr2)
const arr4 = arr2.splice(1,3)
console.log("After splice Old Array : ", arr2)
console.log("New Array : ", arr4)




