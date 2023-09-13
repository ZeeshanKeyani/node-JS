const  marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flashman", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros[3][1]);

//concat method 
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);