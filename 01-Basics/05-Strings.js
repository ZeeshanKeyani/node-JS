
const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + " Value");
// this is the old method of 
// use back tikcs string interpolation placeholder variable inject

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
//for accessing keys
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'))

const nameOne = new String ('zeeshank-hc')

//console.log(nameOne.charAt(0));
//console.log(nameOne.indexOf('z'));
//console.log(nameOne.toLocaleLowerCase());
//console.log(nameOne.toUpperCase());

const newString = nameOne.substring(-8,4)
console.log(newString);

const anOtherString = nameOne.slice(-8,4)
console.log(anOtherString)

//trim and replace 
const newStringOne = "       hiteash    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://google.com/hitesh%20choudary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sunder'))

console.log(gameName.split('-'))