//scope a function 
//let var and const



//console.log(a, b , c);
// this is called block, scope { }
let a =300;
//var c =300; do't use var as it is not good for the scope
if(true){
    let    a = 10; 
    const  b = 20;
    console.log("Inner", a);
  //  var    c  = 30;
        }
    //console.log(a);
    //console.log(b);
    console.log(a);
