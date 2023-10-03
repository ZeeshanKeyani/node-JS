const coding = ['java','pythone','ruby','js','cpp']
  

coding.forEach(function (val)
 {
    if (val == 'pythone') {
       // console.log("Value Detected!!! ")
     
    }

    //console.log(val);
    
})
// coding.forEach( (item) => {
//     console.log(item);
    
// });
function printMe(item) {
  //  console.log(item);
    
}
coding.forEach(printMe)
coding.forEach( (item, index, arr)=>{
   // console.log(item, index, arr);
})
const myCoding =[
    {
        languageName : "JavaScript",
        languageFileName: "Js"

    },
    {
        languageName : "Java",
        languageFileName: "Java"

    },
    {
        languageName : "Python",
        languageFileName: "py"

    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
    
});