const accountId = 14453
let accountEmail = "ayush1603@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 69 //constants can't be modified
// console.log(accountId) //Will give error

accountEmail = "ayush@gmail.com"
accountPassword = "965"
accountCity = "Delhi"

//Ab rather then printing one by one we can print all at once
console.table([accountEmail, accountPassword, accountCity])

// -----------------------------

/* Var vs let
 * var never understood scope hence is rarely used,
 * Always let is used 
 */

// -----------------------------

let accountState
console.log(accountState) //Will be undefined