const accountId = 144553
let accountEmail="avik@google.com"
var accountPassword= "12345"
accountCity ="jaipur"
let accountState

// accountId = 2

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ab@ab.com"
accountPassword = "avik@2003"
accountCity = "kolkata"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])