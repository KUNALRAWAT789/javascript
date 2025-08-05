 const marvel = ["Thor","Spiderman","WhiteTiger"]
//  const dc = ["Batman","Superman","Flash"]
// marvel.push(dc) //pushes on the original array
// const heroes = dc.concat(marvel) // concat gives a new array so always initialize in a variable
// console.log(heroes)
// const newheroes = [...marvel,...dc] //converts array elements into individual elements
// console.log(newheroes)

// const demoarray = [1,4,5,[7,6],8,[5,[9,8]]]
// console.log(demoarray)
// const usablearray = demoarray.flat(3) // concatinates all subarray elements into the original array
// console.log(usablearray)

console.log(Array.isArray(marvel)) //Checks if argument is an array
console.log(Array.from("KUNAL")) //creates an array out of KUNAL
console.log(Array.from({name: "KUNAL"})) //will return an empty array as it cannot convert it into one
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))