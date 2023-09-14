//const  marvel_heros = ["Thor", "Ironman", "Spiderman"]
//const dc_heros = ["superman", "flashman", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros[3][1]);

//concat method 
//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman","Flashman","Batman"]

// push array in to array
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//let allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//we can also use spread

const allHeros = [...marvel_heros, ...dc_heros]
//console.log(allHeros);


const anOtherArray = [1,2,3,[4,5,6],7, [6,7,[4,5]]]

const real_another_array = anOtherArray.flat(Infinity)
console.log(real_another_array)


//array for the seperation of data 
console.log(Array.isArray("Hitesh"))

//to convert array isarray.from

console.log(Array.from("Hitesh"))

console.log(Array.from({name: "hitesh"}))  //intresting

let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1, score2, score3))