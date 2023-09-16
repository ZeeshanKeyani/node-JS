//jo bhi aap ny code likha hain usy apny aik package main
// us pakage ki copy jitny bar utha k le jayn jahan jayen ly ja skty hain



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//reference   execute
  //sayMyName()
// parameters : function jub banatay hain us main jo bhi input laity hian iso ko parameters bolty hain 
// arguments : jub fuction ko call kratay hain us time jo value us k andar pass krty hain us ko bolty hain arguments

// function addTwoNumaber(number1 , number2){
  //   console.log(number1 + number2);
  // }
  function addTwoNumaber(number1 , number2){
    
    // let result = number1 + number2
    // return result
    
    //will not display this below messat afer returnstatement
    //console.log("Hitesh");
    return number1 + number2
  }
      addTwoNumaber(3,5)
      const result = addTwoNumaber(3,4)
//      console.log("Result:" , result)

function loginUserMessage(username)
//username do yahan parameters main jo bhi argument pass kro gay usy main smjh lu ga aur usay values main add kr dunga
  {
    //if(username === undefined)   //ye conditoin to tub run ho ga jb hamari condition true main he evaluate ho 
      if(!username)
        {
      console.log("Please enter a username")
      return
        }
        return `${username} just loged in `
}
  // console.log(loginUserMessage("Hitesh"));
 console.log(loginUserMessage());
//agar kis ny is main arguments he ni pass kiay to kia out put aye ga
//undefined
