//if no comparison then the value will be considerd as the turth value
//rather the value is empty in the strin then it will be assumed as the fals one 

const userEmail = "h@hitesh.ai"
//const userEmail = ""
if (userEmail) {
    console.log("GOt user email ");
}else{
    console.log("Don't have the user email.")
}

//falsy values 
//fals, 0 , -0 BigInt 0, "" , null , undefined , NaN

//truhy values 
// "0", 'false', "", {}, [], funciton(){}
if (userEmail.length === 0){
    console.log("Array is empty")
}

//how to check empty object
const emptyObject = {
    user: "ali"
}
if(Object.keys(emptyObject).length ===0){
    console.log("Object is empty")
}else
{
    console.log("Object is  not empty")
}
// nullish coalescing Operators (???): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10


console.log(val1)
