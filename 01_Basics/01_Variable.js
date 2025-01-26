/*JavaScript Variables can be declared in 4 ways:
    Using const     
    Using let
    Using var
    Automatically
*/

const accountId = 14453
// accountId = 69 //constants can't be modified

// VARIABLES -
let accountEmail = "ayush1603@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//Ab rather then printing one by one we can print all at once
console.table([accountEmail, accountPassword, accountCity])


/* VAR VS LET
 * var never understood scope hence is rarely used,
 * Always let is used 
 */

let accountState
console.log(accountState) //Will be undefined