// # Primitive

// 7 types : String, Number, Boolean, null,Undefined, Symbol, BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber =  3154535453453354356n


// # Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj","doga"]; //array

let myObj = {
    name:"avik",
    age: 22,
}// object

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof heros)



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "avikbhattacharyadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone= {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "avik@google.com"

console.log(userone.email);
console.log(usertwo.email);
