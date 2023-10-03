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
    console.log(item);
    
}
coding.forEach(printMe)