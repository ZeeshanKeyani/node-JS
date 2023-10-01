//<<<<<<< HEAD
for (let i = 0; i <=10; i++) {
   // console.log(`The outer loop is ${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`Outer loop is : ${i} and the inner loop is ${j}`)
       console.log(i + ' * ' +j+ '=' + i*j) 
    }}
//=======
for (let i = 1; i <=10; i++) {
    //console.log(` Outer loop V: ${i}`);
 for (let j = 1; j <=10; j++) {
    //console.log(i +  '*' + j + '=' + i*j);
}}

let myArray = ["flashman ","batman","superman"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++)
 {
    const element = myArray[index];
    //console.log(element);
    
}

let myArrayhw = ["thanos","ironman","sparrow"]
console.log(myArrayhw.length)
for (let index = 0; index < myArrayhw.length; index++) {
    const element = myArrayhw[index];
    //console.log(element);
    
}


for (let z = 1; z <= 10; z++){
    console.log(`The outer loop is : ${z}`)
    for (let x = 1; x <=10; x++) {
        console.log(z + '*' +x+ '=' +z*x )
        
    }
}