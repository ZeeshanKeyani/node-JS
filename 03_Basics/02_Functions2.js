// if we don't know the exact values of the parameters 
// we use rest operator ... and its also called spread operator
//function calculateCartPrice (...num1) // ... 3 dots means jitna bi argument apko khullay main mil rha hai usy aik bundle main pack kr k do
function calculateCartPrice (val1, val2, ...num1) 
{
    return num1
    }

//console.log(calculateCartPrice(200, 400, 500,400, 500));

//how to pass object in to a fuction and being used 

const user ={
    username: "Shan",
    prices:    999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//calling function 
//handleObject(user)
//zarori nhi asy object bana k pass krain 
handleObject({   //method 2 for passing an objet to a funtion 
        username:  "sam",
        price: 199

})
// we can also pass an array to a function 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){

    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,100,600]));


//^*************************************** Scope *********************//