//iife immidiat invoke , function expression

(function chai() {
        console.log(`DB CONNECTED`);
})()

()()  //function defination second for function execution 
//global scope k polloution sy koi agar problem ho to usy htany k le iffe ka use krty hain 

//above function ko hm arrow function k tareeqay sy likh skty hian 
( () =>{
    console.log(`DB Connection two`)
} )()