const name = "avik"
const repocount = 50

//console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // calles string interpolation

const gamename = new String ("avik-hhc")

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));

const newString= gamename.substring(0, 4) //negative values not allowed
console.log(newString);


const anotherString = gamename.slice(-7, 4)// negative values allowed
console.log(anotherString);

const newStringone = "   hitesh   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://avik.com/avik%20bhattacharya"

console.log(url.replace('%20', "-"))

console.log(url.includes('avik'))


console.log(gamename.split('-'));
