//javascript map and reduce

const myNums = [1,2,3]

//exemple in simple funcition 
const myTotal = myNums.reduce(function (acc, currVal) {
    //console.log(`Accumulate : ${acc} and  current value  : ${currVal}`)
    return acc + currVal
},0)
//console.log(myTotal);

// const exnewNum = [1,2,3]
// const practMyTotal = exnewNum.reduce(function (acc, current1){
//     console.log(`Acct is : ${acc} and Current Value: ${current1}`)
//     return acc +current1
//     },0)
//     console.log(practMyTotal);