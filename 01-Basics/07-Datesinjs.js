let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
//console.log(typeof myDate)


//let mCreatedDate = new Date(2023 , 0, 23, 5 ,3);
//console.log(mCreatedDate.toDateString());
//console.log(mCreatedDate.toLocaleString());

let myNewCreatedDate = new Date ("2023-01-14")
//console.log(myNewCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myNewCreatedDate.getTime());
//ConvertIntoseconds
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})



