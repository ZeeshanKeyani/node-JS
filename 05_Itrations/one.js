//<<<<<<< HEAD
for (let i = 0; i <=10; i++) {
   // console.log(`The outer loop is ${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`Outer loop is : ${i} and the inner loop is ${j}`)
       //console.log(i + ' * ' +j+ '=' + i*j) 
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
//console.log(myArrayhw.length)
for (let index = 0; index < myArrayhw.length; index++) {
    const element = myArrayhw[index];
    //console.log(element);
    
}


for (let z = 1; z <= 10; z++){
//    console.log(`The outer loop is : ${z}`)
    for (let x = 1; x <=10; x++) {
  //      console.log(z + '*' +x+ '=' +z*x )
       
    }
}

let longArray = ["100000L","300000L","400000L","786777L"]
//console.log(myArray.length)
    for (let index = 0; index < longArray.length; index++) {
  //      const element = longArray[index];
        //console.log(element);
        
        
    }

    // for (let index = 1; index <= 20; index++) {
    //     if (index == 5) {
    //         console.log("Detected 5");
    //         break
            
    //     }
    //      console.log(`Value of i is ${index}`);
        
    // }

    for (let index = 1; index <= 20; index++) {
        if (index == 5) {
            console.log("Detected 5");
            continue
            
        }
         console.log(`Value of i is ${index}`);
        
    }