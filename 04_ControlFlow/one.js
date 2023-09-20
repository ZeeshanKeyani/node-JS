//const isUserLogIn = true
//const temprature = 41

// if (temprature === 40 ) {
//     console.log("less than 50");
//     }
//     else{
//     console.log("temprature is greater than 50");
//     }
//     console.log("Execute");
    
// if (2 == "2" ){
//     console.log("Executed");

// }
// // ==== also checks the type cheking of the 
// if (2 === "2" ){
//     console.log("Executed");

// }
// if (2 != 3 ){
//     console.log("Executed3");
// }


// const score = 200
// // if we use const the issue of the sope is arises 
// // if we use var then this issue will not arise
// if (score > 100){
//     var power ="fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power:  ${power}`);

//shorthand notation 

// const balance =1000
// if (balance > 5000) console.log("test"), console.log("test2");
// <,> <=, >=, =, ==, !=, ===, !==
// if (2 != 3) {
//     console.log("Executed")
    
// // }

// const isUserLogIn = true
// const temprature = 41

// if (temprature === 40) {
//     console.log("Temprature is less than 50");
    
// }else{
// console.log("Temprature is greater than 50")}
// console.log("Executed")

// const score = 200
// if (score >100) {
//     let power = "fly"
//     console.log(`The power of the user is ${power}`);
    
// }
// console.log(`The power of the user is ${power}`);


const balance = 1000

//if (balance > 500) console.log("test"),console.log("test2");

//nesting 
// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 500");
//  }else if (balance < 900) {
//     console.log("less than 900");
//  }
//  else{
//     console.log("less than 1200");
//  }


const isUserLogIn = true
const debitCard = true
const logedInFromGoogle= false
const logedInFromEmail = true

if (isUserLogIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if (logedInFromGoogle || logedInFromEmail) {
    console.log("user loggedIn");
    
}

