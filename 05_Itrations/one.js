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
            // console.log("Detected 5");
             continue
             
         }
         // console.log(`Value of i is ${index}`);
         
     }
 
         const myNum =[1,2,3,4,5,6,7,8,9,10]
         const NewNum = myNum.filter((num) => num >= 4)
         //console.log(NewNum);
 
         const myNewNum = []
         myNum.forEach( (num) => {
             if(num > 4){
                 myNewNum.push(num);
             }
         })
         
        // console.log(myNewNum);
 
         // const sortedNum =[]
         // myNum.forEach( (num)=> {
         //         if(num > 4){
         //             sortedNum.push(num)
         //         }
 
         // })
         // console.log(sortedNum);
         const one_arry = [1,2,3,4,5,6,7,8,9,10]
 
         const sec_arry = []
         one_arry.forEach( (num) =>{
             if(num >4){
                 sec_arry.push(num)
             }
         })
        // console.log(sec_arry);
 
         const books = [
             { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
             { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
             { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
             { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
             { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
             { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
             { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
             { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
             { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
           ];
           
           const bookdata = books.filter( (bk) => bk.genre =='Non-Fiction')
           console.log(books);
           