// const user ={
//     username: "hitesh",
//     price: 999,
//     prereq: "development",

//     welcomeMessage: function (){
//             //this is used for the curren content for accessing
//         console.log(`${this.username}, Welcome to website`);
//         console.log(`${this.price}, your fee wil be `);
//         console.log(`${this.prereq}, will the prequiest for enterning this field`)
//         console.log(this)
//     }
// }
//         //user.welcomeMessage()
//         //user.username ="sam"
//         //user.welcomeMessage()
//         //console.log(this);


//         // function chai() {
//         //     let username ="Hitesh"
//         //     //console.log(this);
//         //     console.log(this.username)
//         // }
//         // chai()

//        const chai =  () => {
//             let username ="Hitesh"
//             //console.log(this);
//             console.log(this);
//         }
//         //chai()

//         // const addTwo = (num1, num2) => {
//         //         return num1 + num2

//         // }
// //implecet return
// //const addTwo = (num1, num2) => (num1 + num2)
// // agar object return kro gay to paranthesis man rap krna e paray ga
// const addTwo = (num1, num2) => ({username: "Hitesh"})
        
//         console.log(addTwo(3,4));

// // agar curly braces use hua   need to type return if pranthese curly brace lazmi


const user ={
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        //if we are refering the current context 
        console.log(`${this.username}, welocme to website`);
        console.log(this)


    }


}
    //  user.welcomeMessage()
    //  user.username="sam"
    //  user.welcomeMessage()
    console.log(this);


    function chai(){
        let username ="hitesh"
        console.log(this.username);
    }
    chai()