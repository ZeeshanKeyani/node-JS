//scope a function 
//let var and const



//console.log(a, b , c);
// this is called block, scope { }
let a =300;
//var c =300; do't use var as it is not good for the scope
if(true){
    let    a = 10; 
    const  b = 20;
    //console.log("Inner", a);
  //  var    c  = 30;
        }
    //console.log(a);
    //console.log(b);
    //console.log(a);

   // nested scope

   function one() {
    const username = "hitesh"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);
    two()
   }
   //one()

   if(true){

        const username = "Hitesh"
        if(username ==="Hitesh"){
            const website = "youtube"
            //console.log(username + website);
        }
        //console.log(website);
   }
            //console.log(username);

    //++++++++++++++++++++++++++++++++++  Intresting ++++++++++++++++++++++++++++++++++++++//

    console.log(addone(5));   
function addone(num){

    return num+1
}

addTwo(5)
const addTwo = function(num){

    return num + 2
}

