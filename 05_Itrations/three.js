let index = 0;
while (index <=10) {
    //console.log(`The value of index is : ${index}`);
    index = index + 2
    }
const arr = [1,2,3,4,5,6,7]
for (const num of arr) {
    //console.log(num);
    
}
 const greetings = "Hello world!"
 for (const greet  of greetings){    
        if (greet == " ") {
   // console.log("Space Character is dected :");
    break
    
        }
     //       console.log(`Each char is : ${greet}`);  
         } 
 //Maps 
const map = new Map()
    map.set('IN', "India")
    map.set('PK', "Pakistan")
    map.set('Fr', "France")
    map.set('USA', "United States of America")
         //console.log(map);

         for (const [key, value] of map) {
           //console.log(key, ':-', value); 
           

         }
    const myObject = {'game1': 'NFS','game2': 'Spiderman'}
    for (const [key, value] of myObject) {
        console.log(key, ':-', value); 
        
    }