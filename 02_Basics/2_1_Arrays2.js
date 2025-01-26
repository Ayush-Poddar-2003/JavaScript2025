const marvel_heroes = ["Hulk", "Thor", "IronMan"]
const DC_Heroes = ["Aquaman", "Flash", "SuperMan"]

marvel_heroes.push(DC_Heroes)
console.log(marvel_heroes); // [ 'Hulk', 'Thor', 'IronMan', [ 'Aquaman', 'Flash', 'SuperMan' ] ]
// This proves that an array can store any type of element be it other array

const New_Heroes = marvel_heroes.concat(DC_Heroes)
console.log(New_Heroes); //[ 'Hulk', 'Thor', 'IronMan', 'Aquaman', 'Flash', 'SuperMan' ]

const New_Heroes2 = [...marvel_heroes, ...DC_Heroes] // split method to join 2 arrays
console.log(New_Heroes2); // [ 'Hulk', 'Thor', 'IronMan', 'Aquaman', 'Flash', 'SuperMan' ]

//--------------FLATTENING ARRAY-------------------

const Arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const Brr = Arr.flat(Infinity)
console.log(Brr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// -------------CONVERSION OF SOMETHING INTO ARRAY------------
console.log(Array.from("Ayush loves Aditi")); 
//['A','y','u','s','h','','l','o','v','e','s',' ','A','d','i','t','i']

console.log(Array.from( {name : "Ayush"} )); //INTERVIEWERS FAV
// We need to mention wheter to change key or value => []
    
a = 6
b = 9
console.log(Array.of(a,b)); // [ 6, 9 ]

