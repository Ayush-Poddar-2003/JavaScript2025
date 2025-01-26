// Constructor makes singleton object

// Other method to create object is literals
const obj = {
    name: "Ayush",
    age: 21,
    location: "NewDelhi",
    "Actual height": "5-4"
}

//ACCESSING OBJECTS
console.log(obj.name);
console.log(obj["name"]); //This is better as if key is a string we can't use above method

// console.log(obj.Actual height) //error
// console.log(obj."height") //error
console.log(obj["Actual height"]);

//-------------USING SYMBOLS-------------

const mySymbol = Symbol("chaabi")
const obj2 = {
    name: "Aditi",
    lover: "Ayush",
    [mySymbol] : "taala" // Use [ ] !!!!!
}
console.log(obj2[mySymbol]);

// ---------------FUNCTION-------------

obj2.confess = function() {
    console.log("Hey love")
}
console.log(obj2.confess);
console.log(obj2.confess());

