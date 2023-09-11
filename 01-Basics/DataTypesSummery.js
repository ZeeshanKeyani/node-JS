//Data types
//primitive    			non primitive /refrerencetype
//call by value			call by reference

//Primitives(copy main values save hoti hain) 7 hain : String , Number, Boolean, null, undefined,
// Symbol(to make a value unique), BigInt larger values
// dynamic or statically typed language?

//

//Reference type/ Non Premitive direct allocation of the reference to the memory
// Arrays, Objects,  functions   _to master javascript master objects, and webevents\\


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let UserEmail; //undefined

const id = Symbol('123')
const anOtherId = Symbol('123')

console.log( id === anOtherId);

const bigNumber =  3423424343242342342423423423423
//console.log(bigNumber)


//Array 
const  heros = ['kbw','uak','hh', 'ha'];
let myObj = 
{
    name: "Hitesh",
    age: 22,
}

//functions


const myFunction = function() {

    console.log("Hello World")

}

//Objects are always in curley braces
// data type pata krna kis b value ka

console.log(typeof bigNumber)



///****************************************************************** */
//stack heap

//stack (premitive),   non premitive type (heap memory)

// 
let myYouTubeName = "HiteshCoudharydotcom"

let anOtherName = myYouTubeName

anOtherName = "chieaurcode"

console.log(myYouTubeName)
console.log(anOtherName)

let userOne =
{
        email: "user@google.com",
        upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


